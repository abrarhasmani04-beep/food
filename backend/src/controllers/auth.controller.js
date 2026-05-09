import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import foodPartnerModel from "../models/foodpartner.model.js";


const registerUser = async (req,res)=>{

    const {fullName,email,password}=req.body;
    if(!fullName || !email || !password)
    {
        return res.json({
            success:false,
            message:"all field is required"
        })
    }
    

    const exists = await userModel.findOne({email})
    if(exists)
    {
       return res.status(400).json({
            success:true,
            message:"user already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const createUser = await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })
   

    const token = jwt.sign({id:createUser._id},process.env.JWT_SECRET)

    res.cookie('token',token)



    res.json({
        success:true,
        message:"user registered",
        User:{
            _id:createUser._id,
            email:createUser.email,
            fullname:createUser.fullName
        }
    })
}

const loginUser = async (req,res)=>{

    const {email,password}=req.body;

    if(!email || !password)
    {
        return res.json({
            success:false,
            message:"all field is required"
        })
    }

    const user = await userModel.findOne({email})

    if(!user)
    {
        return res.status(400).json({
            success:false,
            message:"user does'nt exists"
        })
    }

    const matchedPassword = await bcrypt.compare(password,user.password)

    if(!matchedPassword)
    {
        return res.json({
            success:false,
            message:"invalid credantials"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie('token',token)

    res.status(200).json({
        success:true,
        message:"login successfull",
        user:{
            id:user._id,
            email:user.email,
            fullname:user.fullname
        }
    })
}

const logoutUser = async (req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out successfully"
    })
}

const registerFoodPartner = async(req,res)=>{

    const {name,email,password,phone,address,contactName}=req.body;

    const AccountAlreadyExists = await foodPartnerModel.findOne({email})

    if(AccountAlreadyExists)
    {
        return res.status(400).json({
            success:false,
            message:"Food Partner Account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,9)
    
    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        password:hashedPassword,
        phone,
        address,
        contactName
    })

    const token = jwt.sign({id:foodPartner._id},process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(200).json({
        success:true,
        message:"Food Partner registered successfully",
        foodPartner:{
            id:foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name
        }
    })
}

const loginFoodPartner = async (req,res)=>{
    const {email,password}= req.body;

    const foodPartner = await foodPartnerModel.findOne({email})

    if(!foodPartner)
    {
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,foodPartner.password)
    
    if (!isPasswordValid)
    {
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const token = jwt.sign({id:foodPartner._id},process.env.JWT_SECRET)
    res.cookie('token',token)

    res.status(200).json({
        message:"food partner logged in successfully",
        foodPartner:{
            _id:foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name
        }
    })
}

const logoutFoodPartner = async (req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message:"Food Partner logged out successfully"
    })
}





export {registerUser,loginUser,logoutUser,registerFoodPartner,loginFoodPartner,logoutFoodPartner}


