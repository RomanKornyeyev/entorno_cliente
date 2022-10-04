// Ejercicio 1
let nombre1 = document.getElementById("nombre1");
let email1 = document.getElementById("email1");
let boton1 = document.getElementById("boton1");
let resultados1 = document.getElementById("resultados1");

function ejercicio1 () {
    if(nombre1.value && email1.value) resultados1.innerHTML=`${nombre1.value} tiene la dirección de email ${email1.value}`;
    else resultados1.innerHTML = `Rellena todos los campos`;
}

// Ejercicio 2
let radio2 = document.getElementById("radio2");
const PI = 3.14159265359;
let resultados2 = document.getElementById("resultados2");

function ejercicio2 () {
    if(radio2.value) resultados2.innerHTML=`El área es: ${((radio2.value * radio2.value) * PI).toFixed(2)} metros`; //con redondeo a 2 decimales
    else resultados2.innerHTML = `Rellena el campo`;
}

//Ejercicio 3
let edad3_1 = document.getElementById("edad3-1");
let edad3_2 = document.getElementById("edad3-2");
let edad3_3 = document.getElementById("edad3-3");
let edad3_4 = document.getElementById("edad3-4");
let resultados3 = document.getElementById("resultados3");
let numeros = [];
let mayor = 0;
let menor = 0;

function ejercicio3 (){
    if(edad3_1.value && edad3_2.value && edad3_3.value && edad3_4.value){
        numeros.push(parseInt(edad3_1.value));
        numeros.push(parseInt(edad3_2.value));
        numeros.push(parseInt(edad3_3.value));
        numeros.push(parseInt(edad3_4.value));
        numeros.sort((a, b) => a-b); //ordenamos el array (sin volcado)
        resultados3.innerHTML = `Ordenación: ${numeros.join(", ")} <br>
        Suma (menor (${numeros.at(0)}) y mayor (${numeros.at(-1)})): ${numeros.at(0) + numeros.at(-1)} <br>
        Producto (2º (${numeros.at(1)}) y 3º (${numeros.at(2)})): ${numeros.at(1) * numeros.at(2)}`;
        numeros = []; //vaciamos el array para evitar concatenaciones posteriores
    }else resultados3.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 4
let lado4 = document.getElementById("lado4");
let resultados4 = document.getElementById("resultados4");

function ejercicio4 () {
    if(lado4.value) resultados4.innerHTML=`El perímetro es: ${(lado4.value * lado4.value).toFixed(2)}² metros`; //con redondeo a 2 decimales
    else resultados4.innerHTML = `Rellena el campo`;
}

//Ejercicio 5
let precio5 = document.getElementById("precio5");
let cantidad5 = document.getElementById("cantidad5");

function ejercicio5(){
    if(precio5.value && cantidad5.value) resultados5.innerHTML = `TOTAL: ${precio5.value * cantidad5.value}`;
    else resultados5.innerHTML = `Rellena los campos`;
}