import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from "./routes/imgaeRoute.js"

//config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//middlewears
app.use(express.json())
app.use(cors())

//API 
app.get('/',(req, res)=>res.send("it is working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


 
app.listen(PORT, ()=>console.log(`Server Running on port ${PORT}`))