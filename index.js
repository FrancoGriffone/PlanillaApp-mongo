const express = require('express')
const conectarDB = require('./config/db');
const cors = require('cors')

//Creamos servidor
const app = express();

//Conexión mongo
conectarDB()

//Habilitación para que lleguen JSON
app.use(express.json());

app.use(cors())

app.use('/api/productos', require('./routes/producto'))
app.use('/api/trabajos', require('./routes/trabajo'))

app.listen(4000, ()=>{
    console.log('El servidor esta corriendo perfectamente')
})