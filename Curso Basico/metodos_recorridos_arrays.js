/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 06/02/2022
*/

// Array de objetos

let articulos = [
    { nombre: "bicicleta", precio: 3000 },
    { nombre: "tv", precio: 2500 }  ,
    { nombre: "libro", precio: 250 },
    { nombre: "celular", precio: 10000 },
    { nombre: "laptop", precio: 20000 },
    { nombre: "teclado", precio: 800 },
    { nombre: "audifonos", precio: 1500 }
];

// Método find

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"; // Encuentra los datos y los muestra todo
});

// Método for each

articulos.forEach(function(articulo){
    console.log(articulo.nombre); // Un ciclo for
});

// Método some

let articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <= 700; // Realiza validación, regresa un dato booleano
});