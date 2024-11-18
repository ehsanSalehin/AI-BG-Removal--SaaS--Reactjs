import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import {createContext, useState} from "react";
import axios from'axios';
import { toast } from "react-toastify";
import {Navigate, useNavigate} from "react-router-dom";


export const AppContext = createContext()


const AppContextProvider = (props)=>{
    const [credit, setCredit]=useState(false)
    const[image, setImage]=useState(false)
    const [resultImage, setResultImage]=useState(false)

    const backendURL = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const {getToken} = useAuth()
    const {isSignedIn} = useUser()
    const {openSignIn} = useClerk()

    const loadCredits = async()=>{
        try{
            //get the token
            const token = await getToken()
            const {data}= await axios.get(backendURL+'/api/user/credits', {headers:{token}})
            if(data.success){
                setCredit(data.credits)
                console.log(data.credits)
            }
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }
    }

    const removeBg = async(image)=>{
        try{
            if(!isSignedIn){
                //if user is not signed in show loggin pop up
                return openSignIn()
            }
            setImage(image)
            setResultImage(false)
            //navigate user to result page
            navigate('/result')
            const token = await getToken()
            //send image to backend
            const formData= new FormData()
            image && formData.append('image', image)
            const {data} = await axios.post(backendURL+'/api/image/remove-bg', formData, {headers:{token}})
            if(data.success){
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
            }else{
                toast.error(data.message)
                data.creditBalance && setCredit(data.creditBalance)
                if(data.creditBalance ===0){
                    Navigate('/buy')
                }
            }
        }catch(err){
            console.log(err)
            toast.error(err.message)
        
        }
    }

    const value={
        credit,setCredit,
        loadCredits,
        backendURL,
        image,
        setImage,
        removeBg,
        resultImage,setResultImage,
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider