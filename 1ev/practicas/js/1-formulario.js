let contenido = document.getElementById("container");
function mostrarTexto(){
    let nombre = document.getElementsByClassName("nombre")[0].value;
    let email = document.getElementsByClassName("email")[0].value;
    document.getElementById("parrafo").innerHTML = nombre + " " + email;
}


// Ejercicio 1

let nombre1 = document.getElementById("nombre");
let email1 = document.getElementById("email");
let boton1 = document.getElementById("boton1");
let resultados1 = document.getElementById("resultados1")

function ejercicio1(){
    if(nombre1.value && email1.value){
        resultados1.innerHTML = `${nombre1.value} tiene la dirección de email ${email1.value}`;
    }else{
        resultados1.innerHTML = `Rellena todos los campos`;
    }
}