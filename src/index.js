// importando paquetes de terceros (NPM)
const express = require("express")

// importando paquetes locales
const misrutas = require("./router/index.js")

// configurar los paquetes importados
let app = express()

// declarar variables auxiliares
let puerto = 3000
let host = "127.2.0.1"

// carga de archivos estaticos
app.use(express.static('public'))

// definir rutas
misrutas(app)

// levantar el servidor
app.listen(puerto, () => {
    console.log(`Servidor levantado en http://${host}:${puerto}`);
})