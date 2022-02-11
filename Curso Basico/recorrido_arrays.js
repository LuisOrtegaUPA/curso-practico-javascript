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

// Métodos "filter"

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 500;
});


// Método map

let articulosMap = articulos.map(function(articulo){
    return articulo.nombre;
});

