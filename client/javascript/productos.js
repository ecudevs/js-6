

function dibujarProductos(productos) {
    let model_producto = '';
    for (let i = productos.length - 1; i >= 0; i--) {
        model_producto = model_producto +
            `<div class='col-md-4'>
        
        <div class="card ps-card">
        
        <img src="${productos[i].foto}" class="card-img-top ps-imagen" alt="...">
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" >eliminar</button>
        <button type="button" class="btn btn-secondary" >editar</button>
        </div>
        <div class="card-body">
        <h4 class="card-title">${productos[i].titulo}</h4>
        <p class="card-text">${productos[i].descripción}</p>
        <p class="card-text">$ ${productos[i].precio}</p>
        <a href="#" class="btn btn-primary float-right">Comprar <i class="fas fa-cart-plus"></i> </a>
        </div>
        </div>
        </div>
    `
    }
    document.getElementById("model_productos").innerHTML = model_producto;
}




function deleteProductos(idProducto){
    alert(idProducto);
    
}

function getProductos() {
    $.ajax({
        url: "/api/productox",
        cache: false,
        success: function (response, status) {
            if (status === 'success') {
                dibujarProductos(response.productos)
            }
        }
    }
    );
}

function postProductos(producto) {
    $.ajax({
        type: 'POST',
        url: "/api/producto/crear",
        data: producto,
        success: function (response, status) {
            if (status === 'success') {
                dibujarProductos(response.productos)
            }
        }
    })
}









const servicios = [
    {
        "id": "a",
        "titulo": "Entregas a domicilio",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "icono": "<i class='fas fa-truck'></i>"
    },
    {
        "id": "b",
        "titulo": "Alquiler de Hieleras",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "icono": "<i class='fas fa-ice-cream'></i>"
    },
    {
        "id": "c",
        "titulo": "Conductor destinado",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "icono": '<i class="fas fa-car"></i>'
    },
    {
        "id": "c",
        "titulo": "Conductor destinado",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "icono": '<i class="fas fa-car"></i>'
    },
    {
        "id": "c",
        "titulo": "Conductor destinado",
        "descripcion": "Lorem ipsum dolor sit amet, vix sonet inimicus at. ",
        "icono": '<i class="fas fa-car"></i>'
    },
]
let model_servcios = '';
for (let i = 0; i < servicios.length; i++) {
    model_servcios = model_servcios +
        `
        <div class='col-12 '>
        <div class="card ps-card">
        <div class="card-body">
        <h4 class="card-title">${servicios[i].titulo}${servicios[i].icono}</h4>
        <p class="card-text">${servicios[i].descripcion}</p>
        <a href="#" class="btn btn-primary btn-block">Solicitar<i class="fas fa-cart-plus"></i> </a>
        </div>
        </div>
        </div>
       `
}
document.getElementById("model_servicios").innerHTML = model_servcios;




