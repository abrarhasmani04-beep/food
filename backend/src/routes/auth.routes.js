import express, { urlencoded } from 'express'
import { registerUser,loginUser,logoutUser, registerFoodPartner, loginFoodPartner,logoutFoodPartner } from '../controllers/auth.controller.js'


const userRouter = express.Router()

//user auth apis
userRouter.post('/user/register',registerUser)
userRouter.post('/user/login',loginUser)
userRouter.post('/user/logout',logoutUser)


//food partner api
userRouter.post('/food-partner/register',registerFoodPartner)
userRouter.post('/food-partner/login',loginFoodPartner)
userRouter.post('/food-partner/logout',logoutFoodPartner)

export default userRouter