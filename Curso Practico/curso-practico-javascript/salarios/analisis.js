/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 13/02/2022
*/ 

// Funciones Helpers

function esPar (lista) {
    if(lista.length % 2 == 0);
}

function calcularMedia (lista) {    
    const suma = lista.reduce(
        function (acumulado = 0, nuevo) {
            return acumulado + nuevo;
        }
    );
}

// Calcular Mediana General

function calcularMediana (lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaA = lista[mitad - 1];
        const personaB = lista[mitad];

        const mediana = calcularMedia([personaA, personaB]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Obtención de salarios de personas

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// Ordenar salrio ascendente

const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return a - b;
    }
);

const medianaGeneralCol = calcularMediana(salariosColSorted);

// Mediana Top 10 

/*
    const arrayEjemplo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ejemplo = arrayEjemplo.splice(5, 2) // Recibe dos parámetros, (corte, elementos a remover)
     
    array = [0, 1, 2, 3, 4, '5'|6 , 7|, 8, 9, 10];
    resultado = [6, 7];
*/

const spliceStart = (salariosColSorted.length * (90) / 100);
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop = salariosColSorted.splice(
    spliceStart, 
    spliceCount
);

const medianaTopCol = calcularMediana(salariosColTop);

console.log({ 
    medianaGeneralCol,
    medianaTopCol,

});