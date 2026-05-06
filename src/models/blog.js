const mongoose = require("mongoose")

const blo = mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true
        },
        para:{
            type:[String],
            required:true
        },
        slug:{
            type:String,
            required:true,
            unique:true
        }
    },
    {timestamps:true}
)

const blog = new mongoose.model("blog",blo)

module.exports=blog