let persona = {
    name: "Luis Ortega",
    age: 21,
    genre: "Hombre"
}


function printElement(object) {
    const obj = Object.values(object);
    for(let i = 0; i < obj.length; i++) {
        console.log(obj[i]);
    }
}

printElement(persona);