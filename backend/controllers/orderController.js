const orderModel=require('../models/orderModel')
//Create Order -/api/v1/order
exports.createOrder=async (req,res,next) =>{
    const cartItems=req.body;
    const amount=cartItems.reduce((acc,item) =>(acc+item.product.price*item.qty),0)
    /* //console.log(req.body,'DATA'); */
    const status='pending'
    const order=await orderModel.create({cartItems,amount,status})
    //Updating product stock
    cartItems.forEach(async (item)=>{
        const product= productModel.findById(item.product._id);
        product.stock=product.stock -item.qty;
        product.save();
    })
    res.json(
        {
            success:true,
            order
        }
    )
}