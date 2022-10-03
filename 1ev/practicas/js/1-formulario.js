// Ejercicio 1
const nombre1 = document.getElementById("nombre1");
const email1 = document.getElementById("email1");
const boton1 = document.getElementById("boton1");
const resultados1 = document.getElementById("resultados1");

function ejercicio1 () {
    if(nombre1.value && email1.value){
        resultados1.innerHTML=`${nombre1.value} tiene la dirección de email ${email1.value}`;
    }else{
        resultados1.innerHTML = `Rellena todos los campos`;
    }
}

// Ejercicio 2
const radio2 = document.getElementById("radio2");
const resultados2 = document.getElementById("resultados2")

function ejercicio2 () {
    if(radio2.value){
        resultados2.innerHTML=`CORRECTO`;
    }else{
        resultados2.innerHTML = `Rellena el campo`;
    }
}