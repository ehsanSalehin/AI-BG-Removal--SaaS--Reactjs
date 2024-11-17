import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

//config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//middlewears
app.use(express.json())
app.use(cors())

//API 
app.get('/',(req, res)=>res.send("it is working"))


 
app.listen(PORT, ()=>console.log(`Server Running on port ${PORT}`))