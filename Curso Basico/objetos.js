/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 06/02/2022
*/

// Objeto auto

let auto = {
    marca: "nissan",
    modelo: 2010,
    color: "azul"
};

// Entrar en objeto

auto.marca;

// Propiedad de function

let miAuto = {
    marca: "Dodge",
    modelo: "Challenger",
    anio: 1970,
    detalles: function(){
        console.log("Auto " + this.modelo + " " + this.anio); // this. "Hace referencia al objeto o al padre"
    }
};

// Llamando propiedad de function

miAuto.detalles(); // Paréntesis debido a que es una función