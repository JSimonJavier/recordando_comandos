const express = require("express")
const app = express()
const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config() //-> toma todas las variables y las carga en PROCESS.ENV -> objeto bastante grande

const productRouter = require("./routes/product.router")
const PORT = process.env.PORT
const URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@data-base.shzhzce.mongodb.net/`

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", productRouter)

const connectToMongo = async() => {
  try{

    await mongoose.connect(URL)
    app.listen(PORT, () => console.log(`Escuchando: http://localhost:${PORT} y BD conectada`))

  } catch(error){
    console.log(error);
  }
}

connectToMongo()