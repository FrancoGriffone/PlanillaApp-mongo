const mongoose = require('mongoose');

const TrabajoSchema = mongoose.Schema({
    fecha: { type: String, require: true },
    cliente: { type: String, require: true },
    productos: { type: Array, require: true },
});

module.exports = mongoose.model('Trabajo', TrabajoSchema);