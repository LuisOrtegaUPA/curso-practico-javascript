/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 13/02/2022
*/

function calcularModa(lista) {

    const objeto = {};

    lista.map(function (elemento) {
        if(objeto[elemento]) {
            objeto[elemento] += 1;
        } else {
            objeto[elemento] = 1;
        }
    });

    const arrayObjeto = Object.entries(objeto).sort(function (a, b) {
        return a[1] - b[1]
    });

    const moda = arrayObjeto[arrayObjeto.length - 1];
    
    return Number(moda[0]);
}