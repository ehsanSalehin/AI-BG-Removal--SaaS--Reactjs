import {Webhook} from 'svix'
import userModel from '../models/userModel.js'
import razorpay from 'razorpay'
import transactionModel from '../models/transactionModel.js'

//clerk user =>http://localhost:4000/api/user/webhooks
const clerkWebhooks =async(req, res)=>{
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })
        const {data, type}=req.body
        switch(type){
            case "user.created":{
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.create(userData)
                res.json({})
                break;
            }
            case "user.updated":{
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.findOneAndUpdate({clerkId:data.id},userData)
                res.json({})
                break;
            }
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({})
                break;
            }
            default:
                break;
        }
    }catch(err){
        console.log(err.message)
        res.status(500).json({success:false, message:err.message})
    }
}

//credits
 
const userCredits=async(req,res)=>{
    try{

        const {clerkId} = req.body
        const userData = await userModel.findOne({clerkId})
        res.json({success:true, credits:userData.creditBalance})
    }catch(err){
        console.log(err.message)
        res.status(500).json({success:false, message:err.message})
    }
}



//buy credits

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

const paymentRazorpay = async(req, res)=>{
    try{

        const {clerkId, planId} = req.body
        const userData = await userModel.findOne({clerkId})
        if(!userData || !planId){
            return res.json({success:false, message:'invalid'})
        }
        let credits, plan, amount, date
        switch(planId){
            case "Penny Pic":
                plan = 'Penny Pic'
                credits = 0
                amount=0
                break;
            case "Cash Flash":
                plan="Cash Flash"
                credits = 50
                amount=6
                break;
            case "Money Shot":
                plan = "Money Shot"
                credits = 150
                amount = 15
                break;

            default:
                break;
        }
        date = Date.now()

        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date
        }

        const newTransaction = await transactionModel.create(transactionData)
        const options = {
            amount:amount*100,
            currency: process.env.CURRRENCY,
            receipt: newTransaction._id
        }
        await razorpayInstance.orders.create(options,(error, order)=>{
            if(error){
                return res.json({success:false, message:error.message})
            }
            res.json({success:true, order})
        })

    }catch(err){
        console.log(err.message)
       res.json({success:false, message: err.message}) 
    }
}


//verify payment

const verifyRazorpay = async(req, res)=>{
    try{

        const {razorpay_order_id} = req.body

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            const transactionData = await transactionModel.findById(orderInfo.receipt)
            if(transactionData.payment){
                return res.json({success:false, message:' payment failed'})
            }
            //adding credits
            const userData = await userModel.findOne({clerkId: transactionData.clerkId})
            const creditBalance = userData.creditBalance + transactionData.credits
            await userModel.findByIdAndUpdate(userData._id, {creditBalance})

            //payment=>done
            await transactionModel.findByIdAndUpdate(transactionData._id, {payment:true})
            res.json({success:true, message: "Done"})
        }   

    }catch(err){
        console.log(err.message)
       res.json({success:false, message: err.message}) 
    }
}



export {clerkWebhooks, userCredits, paymentRazorpay, verifyRazorpay}