//create server
import express, { Router } from 'express'
import userRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import foodRouter from './routes/food.routes.js'
import cors from 'cors'
import router from './routes/food-partner.routes.js'

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api',userRouter)
app.use('/api',foodRouter)
app.use('/api',router)
app.get('/',(req,res)=>{
    res.send("api is running")
})

export default app