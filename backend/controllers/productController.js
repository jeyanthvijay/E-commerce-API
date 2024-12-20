const ProductModel=require('../models/productModel')
//GET PRODUCTS API-/api/v1/products
exports.getProducts=async (req,res,next) => {
    const products=await ProductModel.find({})
 
    res.json({
        success: true,
        products
    })
}
//GET Single Product API -/api/v1/product/:id
exports.getSingleProduct=async (req,res,next) =>{
    try
    {
        const singleproduct=await ProductModel.findById(req.params.id)
        res.json({
            success: true,
           singleproduct
        })
    }
    catch(error)
    {
        res.json({
            success:false,
            message:error.message
        })
    }
    
}