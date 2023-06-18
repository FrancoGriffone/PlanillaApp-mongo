//RUTAS PARA TRABAJO
const express = require('express')
const router = express.Router()
const trabajosController = require('../controllers/trabajosController')

router.post('/', trabajosController.crearTrabajo)
router.get('/', trabajosController.obtenerTrabajos)
router.put('/:id', trabajosController.actualizarTrabajo)
router.get('/:id', trabajosController.obtenerTrabajo)
router.delete('/:id', trabajosController.eliminarTrabajo)

module.exports = router