import foodModel from "../models/food.model.js";
import {uploadFile} from '../services/storage.service.js'
import { v4 as uuidv4} from 'uuid'

const createFood = async(req,res)=>{
    
    const {name,description}= req.body

    const fileUploadResult = await uploadFile(req.file.buffer,uuidv4())
   
    const foodItem = await foodModel.create({
        name,
        description,
        video:fileUploadResult,
        foodPartner:req.foodPartner._id
    
    }) 

   res.status(201).json({
    message:"food created successfully",
    food:foodItem
   })

}

const getFoodItems = async(req,res)=>{
    const foodItems = await foodModel.find({})

    res.status(200).json({
        message:"food items fetched successfully",
        foodItems
    })
}


export {createFood,getFoodItems}