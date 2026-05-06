const express = require("express")
const router = express.Router()

const {addblog,getblog,getidblog} = require("../controllers/blog.controllers")

router.post("/add",addblog)

router.get("/get",getblog)

router.get("/getid/:id",getidblog)

module.exports=router