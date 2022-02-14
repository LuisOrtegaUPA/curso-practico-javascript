/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 13/02/2022
*/

let array = [1, 4, 4, 1, 3, 4, 5, 9];

const listaCount = {}; // Objeto a llenar

array.map( // Recorre arreglo
    function (elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1; // Depende de elementos se irán acumulando
        } else {
            listaCount[elemento] = 1;
        }
    }
); 

// Enviar como argumento objeto, pasar a un array

const arrayObjeto = Object.entries(listaCount).sort(function(a, b) {
    return a[1] - b[1];
}); 

const moda = arrayObjeto[arrayObjeto.length - 1];
console.log("MODA: " + moda[0]);


// Trabajar con .map

let vector = [1, 4, 6, 2, 5, 3];

// Regresar el doble 

let doble = vector.map(function(elemento) {
    return elemento * 2;
});



