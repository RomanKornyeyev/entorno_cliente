// Ejercicio 4.1
const boton1 = document.querySelector("#boton1");
let base1 = document.querySelector("#num1-1");
let altura1 = document.querySelector("#num1-2");
let resultados1 = document.querySelector("#resultados1");

boton1.addEventListener("click", ejercicio1);

function ejercicio1 (){
    if(base1.value && altura1.value){
        resultado1 = 0;
        resultado1 = parseFloat(base1.value) * 2;
        resultado1 += parseFloat(altura1.value) * 2;
        resultados1.innerHTML = `${resultado1.toFixed(2)}`;
    }else resultados1.innerHTML = `Rellena todos los campos`;
}

// Ejercicio 4.2
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
    tabla2_1.innerHTML += `<tr><td><b>Alumno</b></td><td><b>Nota</b></td></tr>`;
    for (let i = 0; i < alumnos.length; i++) {
        listaAlumn[i] = [alumnos[i].value, parseInt(notas[i].value)];
        tabla2_1.innerHTML += `<tr><td>${listaAlumn[i][0]}</td><td>${listaAlumn[i][1]}</td></tr>`;
        sumaTotal += parseInt(notas[i].value);
    } 
    tabla2_1.innerHTML += `<tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                        <tr><td><b>MEDIA:</b></td><td>${sumaTotal/alumnos.length}</td></tr>`;   
}

//Ejercicio 4.3
