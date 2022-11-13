const express=require("express")
var router=express.Router();

const {getProducts, 
    newProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getProductReviews,
    deleteReview
} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

//Probemos autenticación
router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //ruta para agregar un nuevo objeto
router.route(`/producto/:id`).get(getProductById);    //establecemos ruta para buscar producto por id (:id = se le pone por pertenece al metodo como paremtro)           
router.route(`/producto/:id`).put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct)    // creacion de la ruta de actualizacion
router.route(`/producto/:id`).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct)  //  creacion de ruta de eliminacion

router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

module.exports=router;