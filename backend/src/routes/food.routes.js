import express from 'express'
import { createFood } from '../controllers/food.controller.js'
import { authFoodPartnewMiddleware, authUserMiddleware } from '../middlewares/auth.middleware.js'
import multer from 'multer'
import { getFoodItems } from '../controllers/food.controller.js'

const upload = multer({
    storage:multer.memoryStorage()
})

const foodRouter = express.Router()


foodRouter.post("/food",authFoodPartnewMiddleware,upload.single('video'),createFood)

//get/api/food

foodRouter.get('/food',authUserMiddleware,getFoodItems)

//api/food-partner/:id






export default foodRouter