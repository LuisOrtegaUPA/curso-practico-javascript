/*
    Autor: Luis Roberto Ortega Muñoz
    Fecha: 05/02/2022
*/

let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function Game(user, cpu){
    if(user != cpu){
        if(user == piedra && cpu == papel){
            console.log("Cpu win");
        } else if(user == piedra && cpu == tijera){
            console.log("User win");
        } else if(user == papel && cpu == piedra){
            console.log("User win");
        } else if(user == papel && cpu == tijera){
            console.log("Cpu win");
        } else if(user == tijera && cpu == piedra){
            console.log("Cpu win");
        } else if(user == tijera && cpu == papel){
            console.log("User win");
        }
    } else{
        console.log("Draw")
    }
}