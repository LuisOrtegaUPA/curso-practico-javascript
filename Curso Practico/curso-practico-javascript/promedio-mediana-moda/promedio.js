/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 13/02/2022
*/

function calcularMedia(lista) {
    const sumaLista = lista.reduce(  // Método sumando elementos de lista +-/*
        function(acumulado = 0, nuevoElemento) {
            return acumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// for(let i = 0;i < array.length;i++) {
//     suma += array[i];
//     console.log(array[i]);
// }


