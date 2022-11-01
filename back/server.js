const app = require("./app");
const connectDatabase = require("./config/database");

//setear el archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path: 'back/config/config.env'})

// configurar base de datos

connectDatabase();

//mensaje de servidor y puerto
const server = app.listen(process.env.PORT,() => {
    console.log(`servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
