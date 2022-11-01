const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));

//{"nombre" : "Nutra gold Gatos 1,5kg","precio" : "69000","descripcion" : "Pienso para gatos adultos, super premium. Alimento balanceado para control de dieta. Alimento holistico","calificacion" : 4.9,"imagen" : [{"public_id" : "productos/dsvbpny402gelwugv2le","url" : "https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/1/1/111110880_ed-min.jpg"}],"categoria" : "Alimento seco","vendedor" : "Natali Velasquez","inventario" : 50,"numCalificaciones" : 32,"opiniones": []}


//ver lista de productos
exports.getProducts=catchAsyncErrors(async (req,res,next) =>{

    const productos = await producto.find();
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }
    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
})

// ver un producto por id
exports.getProductById= catchAsyncErrors( async (req, res, next)=>{
    const product = await producto.findById(req.params.id)

    //si no encuentra de id verificamos
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})


//Update un producto
exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
    let product = await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    //Si el objeto si existia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
})

//eliminar producto

exports.deleteProduct= catchAsyncErrors(async (req,res,next) =>{
    const product = await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
})



// crear un nuvo producto ----   /api/productos

exports.newProduct=catchAsyncErrors(async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//fetch

// ver todos los productos

function verProductos() {
    fetch('http://localhost:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

// verProductos();  llamamos al metodo creado para probar la consulta


//ver por id

function verProductoPorID(id) {
    fetch('http://localhost:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

// '63584e98cece8792aae984be')  fdsf



