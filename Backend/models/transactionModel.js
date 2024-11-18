import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    clerkId:{type:String, require:true},
    plan:{type:String, require:true},
    amount:{type:Number, require:true},
    credits:{type:Number, require:true},
    payment:{type:Boolean, require:false},
    date:{type:Number},
})

const transactionModel = mongoose.models.transaction || mongoose.model('transaction', transactionSchema)

export default transactionModel