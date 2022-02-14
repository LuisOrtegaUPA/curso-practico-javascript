/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 13/02/2022
*/

// let lista = [2, 2, 3, 3, 5, 7, 8, 130];

function calcularMediana(lista) {
    console.group("ARREGLO");
    console.log("Arreglo original: " + lista)

    lista.sort(function(a, b) { // Comparación
        return a - b;
    });

    console.log("Arreglo ordenado: " + lista);
    console.groupEnd();

    let long = (lista.length)/2;
    let entero = Math.round(long); // Redondear número
    let medianaELse = 0;
    let medianaIf = 0;
    
    console.group("LONGITUD");
    console.log("Longitud arreglo: " + lista.length);
    console.log("Mitad de ongitud arreglo: " + long);
    console.log("Longitud redondeado: " + entero);
    console.groupEnd();

    // Par o impar lista

    if(lista.length % 2 == 0) {
        for(let i = 0;i < entero;i++) {
            // console.log(lista[i]);
            medianaIf = (lista[i] + lista[i+1])
            // console.log("Primero: " + lista[i]);
            // console.log("Siguiente: " + lista[i+1]);
        }
        console.group("MEDIANA");
        console.log("Resultado: " + (medianaIf)/2);
        console.groupEnd();
    } else {
        for(let i = 0;i < entero;i++) {
            medianaELse = lista[i]; // Guarda último número en variable
        }
        console.group("MEDIANA")
        console.log("Resultado: " + medianaELse);
        console.groupEnd();
    }  
}







 

