/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 06/02/2022
*/

let autoNuevo;

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

function mostrarAutos(){
    for(let i = 0;i <= 30;i++){
        autoNuevo = new auto("Dodge", "Challenger", 1990);
        console.log(autoNuevo);
    }
}


