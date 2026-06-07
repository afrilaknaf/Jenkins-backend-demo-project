const express = require("express")
const router = express.Router()

const {wishlist_add,wishlist_get,wishlist_get_data,wishlist_delete} = require("../controllers/wishlist.controllers")

router.post("/post",wishlist_add)

router.get("/get",wishlist_get)

router.get("/getdata",wishlist_get_data)

router.delete("/delete/:id",wishlist_delete)

module.exports=router
