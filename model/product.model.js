const mongoose = require("mongoose")

const productModel = new mongoose.Schema({
  nombre: {
    type: String
  },
  tipo: {
    type: String
  },
  stock: { 
    type: Number, min: [0, "no puede ser negativo"] 
  },
  precio: {
    type: Number
  }
})

module.exports = mongoose.model("Producto", productModel)