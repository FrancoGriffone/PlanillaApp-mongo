const productoModel = require("../models/productoModel");
 
//CREAR PRODUCTO
exports.crearProducto = async (req, res) => {
    try {
        let producto
        producto = new productoModel(req.body);
        await producto.save();
        res.send(producto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//OBTENER TODOS LOS PRODUCTOS
exports.obtenerProductos = async (req, res) => {
    try {
       const productos = await productoModel.find();
       res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ACTUALIZAR UN PRODUCTO
exports.actualizarProducto = async (req, res) => {
    try {
        //VALORES QUE PASAMOS POR EL BODY
       const {producto, nombreGenerico, vencimiento, stock} = req.body;
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }
       //SUSTITUIMOS LOS VALORES DEL NUEVO CON LOS QUE TENEMOS EN LA CONSTANTE PRIMERA
       prod.producto = producto;
       prod.nombreGenerico = nombreGenerico;
       prod.vencimiento = vencimiento;
       prod.stock = stock;
       //BUSCA EL PRODUCTO {ID DE LOS PARAMETROS DE LA URL QUE FIJAMOS EN LA RUTA} + LA VARIABLE prod DE MAS ARRIBA + NEW: TRUE
       prod = await productoModel.findOneAndUpdate({_id: req.params.id}, prod, {new: true})
       res.json(prod)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ACTUALIZAR PRODUCTO Y NOMBRE GENERICO DE UN PRODUCTO
exports.actualizarNombreProducto = async (req, res) => {
    try {
        //VALORES QUE PASAMOS POR EL BODY
       const {producto, nombreGenerico} = req.body;
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }
       //SUSTITUIMOS LOS VALORES DEL NUEVO CON LOS QUE TENEMOS EN LA CONSTANTE PRIMERA
       prod.producto = producto;
       prod.nombreGenerico = nombreGenerico;
    
       //BUSCA EL PRODUCTO {ID DE LOS PARAMETROS DE LA URL QUE FIJAMOS EN LA RUTA} + LA VARIABLE prod DE MAS ARRIBA + NEW: TRUE
       prod = await productoModel.findOneAndUpdate({_id: req.params.id}, prod, {new: true})
       res.json(prod)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ACTUALIZAR VECIMIENTO DE UN PRODUCTO
exports.actualizarVencimientoProducto = async (req, res) => {
    try {
        //VALORES QUE PASAMOS POR EL BODY
       const {vencimiento} = req.body;
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }
       //SUSTITUIMOS LOS VALORES DEL NUEVO CON LOS QUE TENEMOS EN LA CONSTANTE PRIMERA
       prod.vencimiento = vencimiento;

       //BUSCA EL PRODUCTO {ID DE LOS PARAMETROS DE LA URL QUE FIJAMOS EN LA RUTA} + LA VARIABLE prod DE MAS ARRIBA + NEW: TRUE
       prod = await productoModel.findOneAndUpdate({_id: req.params.id}, prod, {new: true})
       res.json(prod)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ACTUALIZAR STOCK DE UN PRODUCTO
exports.actualizarStockProducto = async (req, res) => {
    try {
        //VALORES QUE PASAMOS POR EL BODY
       const {stock} = req.body;
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }
       //SUMAMOS EL STOCK QUE TENIA EL PRODUCTO + EL NUEVO QUE LE ESTAMOS PASANDO
       const nuevoStock = prod.stock + stock;
       //SUSTITUIMOS LOS VALORES DEL NUEVO CON LOS QUE TENEMOS EN LA CONSTANTE PRIMERA
       prod.stock = nuevoStock

       //BUSCA EL PRODUCTO {ID DE LOS PARAMETROS DE LA URL QUE FIJAMOS EN LA RUTA} + LA VARIABLE prod DE MAS ARRIBA + NEW: TRUE
       prod = await productoModel.findOneAndUpdate({_id: req.params.id}, prod, {new: true})
       res.json(prod)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//BUSCAR UN PRODUCTO POR ID
exports.obtenerProducto = async (req, res) => {
    try {
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }

       res.json(prod)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ELIMINAR UN PRODUCTO
exports.eliminarProducto = async (req, res) => {
    try {
       //PRODUCTO DE LA BASE DE DATOS
       let prod = await productoModel.findById(req.params.id)
       //SI EL PRODUCTO NO EXISTE 
       if(!prod){
        res.status(404).json({msg: 'No existe un producto'})
       }
       await productoModel.findOneAndRemove({_id: req.params.id})
    //    res.json({msg: 'Producto eliminado correctamente'})
       res.json(req.params.id)
    } catch (error) {
        console.log(error);
        res.status(500). send('Hubo un error')
    }
}