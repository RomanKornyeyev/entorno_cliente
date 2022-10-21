// Ejercicio 1
//definimos variables
const boton1 = document.querySelector("#boton1");
let base1 = document.querySelector("#num1-1");
let altura1 = document.querySelector("#num1-2");
let resultados1 = document.querySelector("#resultados1");

//añadimos un un evento al hacer click en el botón
boton1.addEventListener("click", ejercicio1);

//función que se ejecuta al hacer click en el botón
function ejercicio1 (){
    if(base1.value && altura1.value){ //si todos los campos están llenos
        baseValor = parseFloat(base1.value);
        alturaValor = parseFloat(altura1.value);
        resultado1 = 0;
        resultado1 = baseValor * 2;
        resultado1 += alturaValor * 2;
        //hacemos los cálculos y printeamos las filas y columnas de la tabla en el HTML, con los resultados
        resultados1.innerHTML = `<tr><td><b>Entrada</b></td><td><b>Salida</b></td></tr>
                                <tr><td>${baseValor.toFixed(2)}, ${alturaValor.toFixed(2)}</td><td>${resultado1.toFixed(2)}</td></tr>`;
    }else resultados1.innerHTML = `Rellena todos los campos`;
}

// Ejercicio 2
const boton2 = document.querySelector("#boton2");
let numAlumn = document.querySelector("#num2");
let alumnosInfo = document.querySelector("#alumnosInfo");
let resultados2 = document.querySelector("#resultados2");

boton2.addEventListener("click", ejercicio2);

function ejercicio2 (){
    if(numAlumn.value) {
        if(numAlumn.value >= 8 && numAlumn.value <= 20){
            resultados2.innerHTML = `Introduce el nombre y las notas de los ${numAlumn.value} alumnos:`;
            alumnosInfo.innerHTML = ``;
            for (let i = 0; i < numAlumn.value; i++) {
                alumnosInfo.innerHTML += `<li class="form-ul-li form-ul-li--50">
                                            <input class="input input-text alumnosNom" type="text" id="alumn${i+1}Nom" placeholder="Nombre">
                                            <label class="label-lane"></label> 
                                        </li>
                                        <li class="form-ul-li form-ul-li--50">
                                            <input class="input input-text alumnosNotas" type="number" id="alum${i+1}Nota" placeholder="Nota">
                                            <label class="label-lane"></label> 
                                        </li>`;
            }
            boton2_1.classList.toggle("display-none");
        }else{
            resultados2.innerHTML = `Introduce un número válido (del 8 al 20)`;
            alumnosInfo.innerHTML = ``;
        }
    }else{
        resultados2.innerHTML = `Rellena todos los campos`;
        alumnosInfo.innerHTML = ``;
    }
}


const resultados2_1 = document.querySelector("#resultados2_1");
const tabla2_1 = document.querySelector("#tabla2_1");
const boton2_1 = document.querySelector("#boton2_1");

boton2_1.addEventListener("click", ejercicio2_1);

function ejercicio2_1 (){
    alumnos = document.querySelectorAll(".alumnosNom");
    notas = document.querySelectorAll(".alumnosNotas");
    listaAlumn = [];
    sumaTotal = 0;
    tabla2_1.innerHTML = ``; //limpieza
    tabla2_1.innerHTML += `<tr><td><b>Alumno</b></td><td><b>Nota</b></td></tr>`;
    for (let i = 0; i < alumnos.length; i++) {
        listaAlumn[i] = [alumnos[i].value, parseInt(notas[i].value)];
        tabla2_1.innerHTML += `<tr><td>${listaAlumn[i][0]}</td><td>${listaAlumn[i][1]}</td></tr>`;
        sumaTotal += parseInt(notas[i].value);
    } 
    tabla2_1.innerHTML += `<tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                        <tr><td><b>MEDIA:</b></td><td>${sumaTotal/alumnos.length}</td></tr>`;   
}

//Ejercicio 3
const boton3 = document.querySelector("#boton3");
let strings = document.querySelectorAll('.strings');
let resultados3 = document.querySelector("#resultados3");

boton3.addEventListener("click", ejercicio3);

function ejercicio3(){
    if(strings[0].value && strings[1].value){
        let p1 = strings[0].value.toLowerCase();
        let letras2 = strings[1].value.toLowerCase().split("");
        let iguales = true;

        letras2.forEach(element => {
            if(!p1.includes(element)){
                iguales=false;
            }
        });

        if(iguales) resultados3.innerHTML = `Resultado: ${true}`;
        else resultados3.innerHTML = `Resultado: ${false}`;
    }else resultados3.innerHTML = `Rellena todos los campos`;
}