/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 06/02/2022
*/

let frutas = ["mango", "fresa", "platano", "kiwi", "melon"];

function mostrarFrutas(fruta){
    console.log("Me gusta la fruta: " + fruta);
}

// Ciclo For

for(let i = 0;i < frutas.length;i++){
    mostrarFrutas(frutas[i]);
}

// For de array

for(let fruta of frutas){
    mostrarFrutas(fruta);
}

// Ciclo while

let alumnos = ["Lalo", "Memel", "Wicho", "Tuth", "Sophia"];

function saludar(alumno){
    console.log("Hola " + alumno);
}

while(alumnos.length > 0){
    let alumno = alumnos.shift(); // Saca primer elemento 
    saludar(alumno);
}

