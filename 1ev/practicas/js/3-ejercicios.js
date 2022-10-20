// Ejercicio 1
const boton1 = document.querySelector("#boton1");
let base1 = document.querySelector("#num1-1");
let altura1 = document.querySelector("#num1-2");

boton1.addEventListener("click", ejercicio1);

function ejercicio1 (){
    if(base1.value && altura1.value){
        resultado1 = 0;
        resultado1 = parseFloat(base1.value) * 2;
        resultado1 += parseFloat(altura1.value) * 2;
        resultados1.innerHTML = `${resultado1.toFixed(2)}`;
    }else resultados1.innerHTML = `Rellena todos los campos`;
}

// Ejercicio 2
const boton2 = document.querySelector("#boton2");
let numAlumn = document.querySelector("#num2");

boton2.addEventListener("click", ejercicio2);

function ejercicio2 (){
    if(numAlumn.value) {
        if(numAlumn.value > 8 && numAlumn.value < 20){
            resultados2.innerHTML = `Introduce el nombre y las notas de los ${numAlumn.value} alumnos:`;
        }else{
            resultados2.innerHTML = `Introduce un número válido (del 8 al 20)`;
        }
    }else resultados2.innerHTML = `Rellena todos los campos`;
}


const boton2_1 = document.querySelector("#boton2_1");

boton2_1.addEventListener("click", ejercicio2_1);

function ejercicio2_1 (){
    
}