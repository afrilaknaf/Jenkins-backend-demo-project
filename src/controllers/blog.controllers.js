const blog = require("../models/blog")

exports.addblog = async(req,res)=>{
    let {image,title,para,slug} = req.body
    let data = new blog({image,title,para,slug})
    await data.save()
    res.json({msg:"data Blog Added Successfully",data})
}

exports.getblog=async(req,res)=>{
    let data = await blog.find()
    res.json({msg:"Data Blog Getted",data})
}

exports.getidblog = async(req,res)=>{
    let {id} = req.params
    const data = await blog.findById(id)
    res.json({msg:"data find successfully",data})
}

