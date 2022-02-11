// Código del cuadrado

console.group("Cuadrados"); // Agrupa mensajes

// const ladoCuadrado = 5;
// console.log("Los lados miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd(); // End agrupación cuadrados

// Código del triangulo

console.group("Triángulos");

function perimetroTriangulo(lado, base) {
    if(lado != base) {
        return (lado * 2) + base;
    }else {
        alert("No es un triángulo isóceles");
    }
} 

function areaTriangulo(base, altura) {
    if(base != altura) {
        return (base * altura) / 2;
    }else {
        alert("No coinciden los datos de la base y altura");
    }
} 

console.groupEnd();


// Código del círculo

console.group("Círculos");

// diametro
function diametroCirculo(radio) {
    return radio * 2;
} 

// pi
const pi = Math.PI;

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 

// area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();


// Interacción con HTML

// Funciones Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); // Permite obtener el input html
    const value = input.value; // Se obtiene el valor del input

    const perimetro = perimetroCuadrado(value); // Se reutiliza la función
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); // Permite obtener el input html
    const value = input.value; // Se obtiene el valor del input

    const area = areaCuadrado(value); // Se reutiliza la función
    alert(area);
}

// Funciones Triangulo

function calcularPerimetroTriangulo() {
    const inputSide = document.getElementById("InputTrianguloLado");
    const valueSide = inputSide.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueSide, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const inputHeight = document.getElementById("InputTrianguloAltura");
    const valueHeight = inputHeight.value;

    const area = areaTriangulo(valueBase, valueHeight);
    alert(area);
}

// Funciones de Círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}