const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    producto: { type: String, require: true },
    nombreGenerico: { type: String, require: true },
    vencimiento: { type: String, require: true },
    stock: { type: Number, require: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);