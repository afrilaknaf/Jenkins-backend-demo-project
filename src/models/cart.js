const mongoose = require("mongoose");

const cart_schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user"
  },

  productId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    refPath: "productModel"
  },

  productModel: {
    type: String,
    required: true,
    enum: ["premimum", "products"]
  },

  producttype: {
    type: String,
    required: true,
    enum: ["premium", "normal"]
  },

  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

module.exports = mongoose.model("cart", cart_schema);