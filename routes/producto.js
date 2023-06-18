//RUTAS PARA PRODUCTO
const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

router.post('/', productoController.crearProducto)
router.get('/', productoController.obtenerProductos)
router.put('/:id', productoController.actualizarProducto)
router.put('/actualizarprod/nombre/:id', productoController.actualizarNombreProducto)
router.put('/actualizarprod/vencimiento/:id', productoController.actualizarVencimientoProducto)
router.put('/actualizarprod/stock/:id', productoController.actualizarStockProducto)
router.get('/:id', productoController.obtenerProducto)
router.delete('/:id', productoController.eliminarProducto)

module.exports = router