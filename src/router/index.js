
function rutas(app) {

    app.get("/", function(requerimiento, respuesta){
        respuesta.send("<h1>Página de INICIO</h1>");
    });

    app.get("/servicios", function(req, res){
        res.send("<h1>Nuestros Servicios</h1>");
    });
    
    app.get("/contacto", (req, res) => {
        res.send("<h1>Contáctenos</h1>");
    })
}

module.exports = rutas

