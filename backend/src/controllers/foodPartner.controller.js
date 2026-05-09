import foodPartnerModel from '../models/foodpartner.model.js'


const getFoodPartnerById = async(req,res)=>{
    const foodPartnerId = req.params.id;

    const foodPartner = await foodPartnerModel.findById(foodPartnerId)

    if(!foodPartner)
    {
        return res.status(404).json({message:"Food Partner Not Found"})
    }

    res.status(200).json({
        message:"Food Partner Found",
        foodPartner
    })
}

export default getFoodPartnerById