const mongoose = require('mongoose')
require('dotenv').config({path: '.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://FrancoGriffone:kaiin070@cluster0.okf5vxq.mongodb.net/planillaTrabajo", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false //no me funciona
        })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
        process.exit(1) //detener app
    }
}

module.exports = conectarDB
