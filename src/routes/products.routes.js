const express = require("express")

const router = express.Router()

const {createproducts,getproducts,add} = require("../controllers/products.controllers")

router.post("/create",createproducts)

router.get("/get",getproducts)

module.exports=router