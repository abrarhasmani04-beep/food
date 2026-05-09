import express from 'express'
import getFoodPartnerById from "../controllers/foodPartner.controller.js"
import { authUserMiddleware } from '../middlewares/auth.middleware.js';

const router= express.Router()

// /api/food-partner/:id

router.get('/food-partner/:id',authUserMiddleware,getFoodPartnerById)

export default router