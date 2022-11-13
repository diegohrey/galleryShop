const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary= require("cloudinary")

//setear el archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path: 'back/config/config.env'})

// configurar base de datos
connectDatabase();

//Configurar Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//mensaje de servidor y puerto
const server = app.listen(process.env.PORT,() => {
    console.log(`servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
