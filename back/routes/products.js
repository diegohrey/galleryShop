const express=require("express")

var router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador



//  rutas

router.route('/productos').get(getProducts); //Establecemos desde que ruta queremos ver el getProductsmodule.exports=router;
router.route('/producto/nuevo').post(newProduct); //ruta para agregar un nuevo objeto
router.route(`/producto/:id`).get(getProductById);    //establecemos ruta para buscar producto por id (:id = se le pone por pertenece al metodo como paremtro)           
router.route(`/producto/:id`).put(updateProduct)    // creacion de la ruta de actualizacion
router.route(`/producto/:id`).delete(deleteProduct)  //  creacion de ruta de eliminacion





module.exports=router;

//
