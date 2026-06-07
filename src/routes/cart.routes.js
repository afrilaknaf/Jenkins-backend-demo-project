const express = require("express")
const router = express.Router()

const {cart_post,cart_get,cart_get_data} = require("../controllers/cart.controllers")

router.post("/post",cart_post)

router.get("/get",cart_get)

router.get("/get_data",cart_get_data)

module.exports = router