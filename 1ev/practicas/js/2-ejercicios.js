// Ejercicio 1
const boton1 = document.querySelector("#boton1");
let num1_1 = document.querySelector("#num1-1");
let num1_2 = document.querySelector("#num1-2");
let num1_3 = document.querySelector("#num1-3");
let resultados1 = document.querySelector("#resultados1");
let numeros1 = [];

boton1.addEventListener("click", ejercicio1);

function ejercicio1 (){
    if(num1_1.value && num1_2.value && num1_3.value){
        numeros1 = [parseInt(num1_1.value), parseInt(num1_2.value), parseInt(num1_3.value)];
        numeros1.sort((a, b) => b-a); //ordenamos el array (sin volcado)
        resultados1.innerHTML = `Ordenación: ${numeros1.join(", ")}`;
        numeros1 = []; //vaciamos el array para evitar concatenaciones posteriores
    }else resultados1.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 2
const boton2 = document.querySelector("#boton2");
let ej2_num1 = document.querySelector("#ej2_num1");
let resultados2 = document.querySelector("#resultados2");

boton2.addEventListener("click", ejercicio2);

function ejercicio2 (){
    if(ej2_num1.value){
        resultados2.innerHTML = `El número tiene ${ej2_num1.value.toString().length} cifras.`
    }else resultados2.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 3
const boton3 = document.querySelector("#boton3");
let ej3_num1 = document.querySelector("#ej3_num1");
let resultados3 = document.querySelector("#resultados3");

boton3.addEventListener("click", ejercicio3);

function ejercicio3 (){
    if(ej3_num1.value){
        let cadena = ej3_num1.value.toString();
        let invertido1 = "";
        for (let i = cadena.length; i > 0; i--) { //recorro el string desde el final hasta el inicio
            invertido1 += cadena.substring(i, i-1);
        }
        resultados3.innerHTML = `Número invertido: ${invertido1}.`
        document.write
    }else resultados3.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 4
const boton4 = document.querySelector("#boton4");
let ej4_num = document.querySelector("#ej4_num");
let resultados4 = document.querySelector("#resultados4");

boton4.addEventListener("click", ejercicio4);

function ejercicio4 (){
    if(ej4_num.value){
        let cadena = ej4_num.value.toString();
        let invertido1 = "";
        for (let i = cadena.length; i > 0; i--) { //recorro el string desde el final hasta el inicio
            invertido1 += cadena.substring(i, i-1);
        }
        if(cadena == invertido1) resultados4.innerHTML = `Es capicúa`;
        else resultados4.innerHTML = `NO es capicúa`;
    }else resultados4.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 5

