const express  = require("express")
const bodyParser = require("body-parser")
const router = require("./routes/index.routes")
const cors = require('cors')
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.json('welcome to the api for app notes!')
})
app.use('/api/', router)
app.get('*', (req, res) =>{
    res.send('Que estas buscando papu? Estas son las rutas disponibles hasta ahora:\n\n'+
    '/\n/api\n/api/note\n/api/user');
})

module.exports = app 