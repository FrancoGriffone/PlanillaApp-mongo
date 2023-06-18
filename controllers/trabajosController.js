const trabajoModel = require("../models/trabajoModel");
 
//CREAR TRABAJO
exports.crearTrabajo = async (req, res) => {
    try {
        let trabajo
        trabajo = new trabajoModel(req.body);
        await trabajo.save();
        res.send(trabajo)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//OBTENER TODOS LOS TRABAJOS
exports.obtenerTrabajos = async (req, res) => {
    try {
       const trabajos = await trabajoModel.find();
       res.json(trabajos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ACTUALIZAR UN PRODUCTO
exports.actualizarTrabajo = async (req, res) => {
    try {
        //VALORES QUE PASAMOS POR EL BODY
       const {fecha, cliente, productos} = req.body;
       //PRODUCTO DE LA BASE DE DATOS
       let trab = await trabajoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!trab){
        res.status(404).json({msg: 'No existe un trabajo'})
       }
       //SUSTITUIMOS LOS VALORES DEL NUEVO CON LOS QUE TENEMOS EN LA CONSTANTE PRIMERA
       trab.fecha = fecha;
       trab.cliente = cliente;
       trab.productos = productos;

       //BUSCA EL PRODUCTO {ID DE LOS PARAMETROS DE LA URL QUE FIJAMOS EN LA RUTA} + LA VARIABLE prod DE MAS ARRIBA + NEW: TRUE
       trab = await trabajoModel.findOneAndUpdate({_id: req.params.id}, trab, {new: true})
       res.json(trab)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//BUSCAR UN TRABAJO POR ID
exports.obtenerTrabajo = async (req, res) => {
    try {
       //TRABAJO DE LA BASE DE DATOS
       let trab = await trabajoModel.findById(req.params.id)
       //SI EL TRABAJO NO EXISTE 
       if(!trab){
        res.status(404).json({msg: 'No existe un trabajo'})
       }

       res.json(trab)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ELIMINAR UN TRABAJO
exports.eliminarTrabajo = async (req, res) => {
    try {
       //TRABAJO DE LA BASE DE DATOS
       let trab = await trabajoModel.findById(req.params.id)
       //SI EL TRABAJO NO EXISTE 
       if(!trab){
        res.status(404).json({msg: 'No existe un trabajo'})
       }
       await trabajoModel.findOneAndRemove({_id: req.params.id})
       res.json({msg: 'Trabajo eliminado correctamente'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}