import express from "express"
import { clerkWebhooks, paymentRazorpay, userCredits, verifyRazorpay } from "../controllers/UserController.js"
import authUser from "../middlewears/auth.js"

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)
userRouter.get('/credits', authUser, userCredits)
userRouter.post("/pay-razor", authUser, paymentRazorpay)
userRouter.post("/verify-reazor",verifyRazorpay)

export default userRouter