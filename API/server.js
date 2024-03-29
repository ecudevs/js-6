
// configuracion inicial de server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require("http");
const process = require("process");
const path = require("path");
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const productos = [
    {
        "id": 1,
        "titulo": "Six pack Corona",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeaYemlsGy2lOHUeajUy4Houyw7dwWIGzzRfzJZ-mgOhKNoLp",
        "precio": "12"
    },
    {
        "id": 2,
        "titulo": "Six pack Stella",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://almacen.do/wp-content/uploads/2018/03/Cerveza-Stella-Artois-330-ml-Turn.jpg",
        "precio": "24"
    },
    {
        "id": 3,
        "titulo": "Six pack Pilsener light",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://i.ytimg.com/vi/9RY7O0O0X-0/maxresdefault.jpg",
        "precio": "18"
    },
    {
        "id": 4,
        "titulo": "Six pack Corona",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeaYemlsGy2lOHUeajUy4Houyw7dwWIGzzRfzJZ-mgOhKNoLp",
        "precio": "12"
    },
    {
        "id": 5,
        "titulo": "Six pack Stella",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://almacen.do/wp-content/uploads/2018/03/Cerveza-Stella-Artois-330-ml-Turn.jpg",
        "precio": "24"
    },
    {
        "id": 6,
        "titulo": "Six pack Pilsener light",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "foto": "https://i.ytimg.com/vi/9RY7O0O0X-0/maxresdefault.jpg",
        "precio": "18"
    },
]

// SERVIR APIS 

// ENDPOINT 1 LLAMAR LISTA DE PRODUCTOS
app.get('/api/productox/', (req, res) => {
    res.send({
        productos: productos
    })
})

// ENDPOINT 2 - METODO POST ... GUARDAR PRODUCTO
app.post('/api/producto/crear', (req, res) => {
    console.log('Que hay aqui: ' + req.body.titulo)
    const nuevoProducto = {
        id: productos.length + 1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        foto: req.body.fotoUrl,
        precio: req.body.precio,
    }
    productos.push(nuevoProducto);
    res.send({
        success: true,
        mensaje: 'producto agregado exitosamente',
        productos: productos
    })
})

// ENDPOINT 3 - METODO DELETE ... ELIMINAR PRODUCTO
app.delete('/api/producto/:id',(req,res)=>{
    const id = parseInt(req.params.id, 10);
    console.log("el id es: "+id);
    let eliminado = false;
    productos.map((producto,index)=>{
        if(producto.id === id ){
            /*Comando para remover de un arreglo */productos.splice(index, 1);
            eliminado = true;
        }
    });
    if(eliminado){
        return res.status(200).send({ success: true, message: 'Producto eliminado', productos:productos });
    }
    else{
        return res.status(404).send({ success: false, message: `No existe: ${id}`});
    }
});

// ENDPOINT 5 GET PRODUCTO POR ID 
app.get('/api/producto/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let encontre = false;
    let producto={};
    console.log('id:'+id)
    productos.map((item,index)=>{
             if(item.id === id ){
            encontre=true; 
            producto= item;
        }
    });
    if(encontre){
        return res.status(200).send({ success: true, message: 'existe', producto:producto });
    }
    else{
        return res.status(404).send({ success: false, message: `No existe: ${id}`});
    }

})



// LEVANTAR RUTA DE ASSETS && LEVANTAR INDEX.HTML
app.use("/", express.static(path.join(__dirname, "../client")));
app.get("/*", (req, res) => { res.sendFile(path.resolve(__dirname, "../client", "index.html")); });

const port = process.env.PORT || "9001";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`MY SERVER IS RUNNING EN EL PUERTO:${port}`));