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
    if(ej2_num1.value) resultados2.innerHTML = `El número tiene ${ej2_num1.value.toString().length} cifras.`
    else resultados2.innerHTML = `Rellena todos los campos`;
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
            invertido1 += cadena.substring(i-1, i);
        }
        if(cadena == invertido1) resultados4.innerHTML = `Es capicúa`;
        else resultados4.innerHTML = `NO es capicúa`;
    }else resultados4.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 5
const boton5 = document.querySelector("#boton5");
let ej5_inicial = document.querySelector("#ej5_ini");
let ej5_final = document.querySelector("#ej5_fin");
let tabla5 = document.querySelector("#tabla5");

let e = document.querySelector("#ej5_opc");
let valor5 = e.value;
let texto5 = e.options[e.selectedIndex].text;

function onChange5() {
    valor5 = e.value;
    texto5 = e.options[e.selectedIndex].text;
    console.log(valor5, texto5);
}
onChange5(); // ejecutamos la función para que cargue el valor inicial por defecto (celsius)
e.onchange = onChange5; // cada vez que se cambie se actualiza

boton5.addEventListener("click", ejercicio5);

function ejercicio5 (){
    tabla5.innerHTML = ``; //limpieza de la tabla
    if(ej5_inicial.value && ej5_final.value){
        let v_inicial5 = parseInt(ej5_inicial.value);
        let v_final5 = parseInt(ej5_final.value);
        let rango5;
        let proporcion5;
        rango5 = v_final5 - v_inicial5;
        proporcion5 = rango5 / 9; //sacamos la proporción truncada a 2 decimales
        if(valor5 == 1){ //si es celsius
            tabla5.innerHTML += `<tr><td>Posición</td><td>Celsius</td><td>Fahrenheit</td></tr>`;
            for(let i = 0; i < 10; i++) tabla5.innerHTML += `<tr><td>${i+1}</td><td>${(v_inicial5+(proporcion5*i)).toFixed(2)}</td><td>${(((v_inicial5+(proporcion5*i))*9/5)+32).toFixed(2)}</td></tr>`;
        }else{ //si es fahrenheit
            tabla5.innerHTML += `<tr><td>Posición</td><td>Fahrenheit</td><td>Celsius</td></tr>`;
            for(let i = 0; i < 10; i++) tabla5.innerHTML += `<tr><td>${i+1}</td><td>${(v_inicial5+(proporcion5*i)).toFixed(2)}</td><td>${(((v_inicial5+(proporcion5*i))-32)*5/9).toFixed(2)}</td></tr>`;            
        }
    }else tabla5.innerHTML = `Rellena todos los campos`;
}

//Ejercicio 6
//MONEDA ENTRADA
let e6_in = document.querySelector("#ej6_entrada");
let valor6_in = e6_in.value;
let texto6_in = e6_in.options[e6_in.selectedIndex].text;
function onChange6_in() {
    valor6_in = e6_in.value;
    texto6_in = e6_in.options[e6_in.selectedIndex].text;
    console.log(valor6_in, texto6_in);
}
onChange6_in(); 
e6_in.onchange = onChange6_in;

//MONEDA SALIDA
let e6_out = document.querySelector("#ej6_salida");
let valor6_out = e6_out.value;
let texto6_out = e6_out.options[e6_out.selectedIndex].text;
function onChange6_out() {
    valor6_out = e6_out.value;
    texto6_out = e6_out.options[e6_out.selectedIndex].text;
    console.log(valor6_out, texto6_out);
}
onChange6_out(); 
e6_out.onchange = onChange6_out;

//INPUT Y OPERACIONES
const boton6 = document.querySelector("#boton6");
let ej6_num = document.querySelector("#ej6_num");
let resultados6 = document.querySelector("#resultados6");

boton6.addEventListener("click", ejercicio6);

function ejercicio6 () {
    if(ej6_num.value){
        resultados6.innerHTML = `${(ej6_num.value * e6_out.value/e6_in.value).toFixed(3)} ${texto6_out}`;
        alert("¡Conversión completada!");
    }
    else resultados6.innerHTML = `Rellena todos los campos`;
}