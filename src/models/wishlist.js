const mongoose = require("mongoose")
const Products = require("./product")

const wishlist_Schema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:"productModel"
    },
    producttype:{
        type:String,
        enum:["premium","normal"],
        required:true
    },
    productModel:{
        type:String,
        required:true,
        enum:["premimum","products"]
    }
},{timestamps:true})

wishlist_Schema.index({userId:1,productId:1,producttype:1},{ unique:true })

const wishlist = new mongoose.model("wishlist",wishlist_Schema)

module.exports = wishlist