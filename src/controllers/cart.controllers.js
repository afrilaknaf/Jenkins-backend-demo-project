const cart = require("../models/cart")

exports.cart_post = async (req, res) => {
    const { userId, productId, productModel, producttype, quantity } = req.body

    const exists = await cart.findOne({ userId, productId })
    if (exists) {
        exists.quantity += 1
        await exists.save()
       return res.json({ msg: "Product Add One", exists })
    }
    const data = new cart({ userId, productId, productModel, producttype, quantity })
    await data.save()
    res.json({ msg: "Cart Post Successfully", data })
}

exports.cart_get = async(req,res)=>{
    const data = await cart.find()
    res.json({msg:"Data Get SuccessFully",data})
}


exports.cart_get_data = async(req,res)=>{
    const data = await cart.find().populate("productId")
    res.json({msg:"Data Get SuccessFully",data})
}
