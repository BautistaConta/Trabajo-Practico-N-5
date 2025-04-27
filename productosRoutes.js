const express = require('express');
const router = express.Router();
const controller = require('../controllers/productosController');

// Endpoints REST
router.get('/productos', controller.listarProductos);
router.post('/productos', controller.agregarProducto);

// Opcionales
router.get('/productos/:id', controller.obtenerProducto);
router.put('/productos/:id', controller.actualizarProducto);
router.delete('/productos/:id', controller.eliminarProducto);

module.exports = router;
