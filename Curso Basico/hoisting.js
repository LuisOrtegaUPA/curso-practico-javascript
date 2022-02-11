/* 
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 05/02/2022
*/

// Hoisting con variables

console.log(miNombre);

var miNombre = "Luis";

// Hoisting con funciones

hey();

function hey(){
    return "Hola " + miNombre;
}