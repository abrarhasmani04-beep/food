import foodPartnerModel from "../models/foodpartner.model.js";
import jwt from 'jsonwebtoken'
import userModel from "../models/user.model.js";

const authFoodPartnewMiddleware = async(req,res,next)=>{
   
    const token = req.cookies.token;
    if(!token)
    {
        return res.status(401).json({
            message:"Please login first"

        })
    }

    try {
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET) //this token is valid then the data which insert at time of creation of token is asign to decoded

        const foodPartner = await foodPartnerModel.findById(decoded.id)

        req.foodPartner = foodPartner
        next()

    } catch (error) {
        return res.status(401).json({
            mesasge:"invalid token"
        })
    }

}

const authUserMiddleware = async (req,res,next)=>{

    const token =  req.cookies.token;
    if(!token)
    {
        return res.status(401).json({
            message:"Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        req.user= user
        next()

    } catch (error) {
        return res.status(401).json({
            message:"invalid token"
        })
    }


}


export {authFoodPartnewMiddleware,authUserMiddleware

}