//seleccionamos la delegación
let deleg = document.querySelector("#delegaciones");
let valor = deleg.value;
let texto = deleg.options[deleg.selectedIndex].text;
function onChange() {
    valor = deleg.value;
    texto = deleg.options[deleg.selectedIndex].text;
    console.log(valor, texto);
}
onChange(); // ejecutamos la función para que cargue el valor inicial por defecto (sevilla)
deleg.onchange = onChange; // cada vez que se cambie se actualiza

//datos que recibimos por los inputs
let nombre = document.querySelector("#nombre");
let sueldo = document.querySelector("#sueldo");
let enviar = document.querySelector("#enviar");
let avisos = document.querySelector("#avisos");
let resSevilla = document.querySelector("#res-sevilla");
let resHuelva = document.querySelector("#res-huelva");
let resCadiz = document.querySelector("#res-cadiz");

//arrays para almacenarlos
//van a ser bidimensionales posteriormente
let listaSevilla = []; 
let listaHuelva = [];
let listaCadiz = [];

//submit
enviar.addEventListener("click", llenarLista);

//llenamos las listas
function llenarLista(){
    if(nombre.value && sueldo.value){
        //limpiamos avisos (si los hubiese)
        avisos.innerHTML = "";

        switch (deleg.value) {
            //1 = sevilla
            case "1":resSevilla.innerHTML = introducirEmple(listaSevilla, "SEVILLA");break;
            //2 = huelva
            case "2":resHuelva.innerHTML = introducirEmple(listaHuelva, "HUELVA");break;
            //3 = cadiz
            case "3":resCadiz.innerHTML = introducirEmple(listaCadiz, "CADIZ");break;

            //resto
            default:break;
        }
        
    }else avisos.innerHTML = `Rellena todos los campos para añadir el empleado`;

    //apartado A
    imprimirLong();
    //apartado B
    imprimirMedias();
    //apartado C
    imprimirOrdenados();
    //apartado D
    imprimirMayMen();
}

function introducirEmple(arr, delegacion){
    //delegación (ej: sevilla)
    let cadena = "<b>"+delegacion+":</b> ";
    //pusheamos datos al array
    arr.push([nombre.value, sueldo.value]);
    //llenamos la cadena de los datos del array
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            cadena+=arr[i][j]+' ';
        }
        cadena+=', ';
    }
    //devolvemos la cadena
    return cadena;
}

//apartado A
let resA = document.querySelector("#res-a");
function imprimirLong(){
    resA.innerHTML = `<b>a) Número de empleados:</b><br>
                        SEVILLA: ${listaSevilla.length}<br>
                        HUELVA: ${listaHuelva.length}<br>
                        CÁDIZ: ${listaCadiz.length}`;
}

//apartado B
let resB = document.querySelector("#res-b");
function imprimirMedias(){
    let medSevilla = media(listaSevilla);
    let medHuelva = media(listaHuelva);
    let medCadiz = media(listaCadiz);
    resB.innerHTML = `<b>b) Sueldos medios:</b><br>
                        SEVILLA: ${medSevilla}€<br>
                        HUELVA: ${medHuelva}€<br>
                        CADIZ: ${medCadiz}€`;
}

function media(arr){
    let sumaTot = 0;
    for (var i = 0; i < arr.length; i++) {
        sumaTot += parseInt(arr[i][1]);
    }
    //devolvemos la media
    let med = sumaTot / arr.length;
    return med.toFixed(2);
}

//apartado C
let resC = document.querySelector("#res-c");
function imprimirOrdenados(){
    let suelHuel = ordenar(listaHuelva, "to-up");
    let suelSev = ordenar(listaSevilla, "to-down");
    let suelCad = ordenar(listaCadiz, "to-down");

    resC.innerHTML = `<b>c) ORDENACIONES DE SUELDOS:</b><br>
                        HUELVA (de menor a mayor): ${suelHuel}<br>
                        SEVILLA (de mayor a menor): ${suelSev}<br>
                        CÁDIZ (de mayor a menor): ${suelCad}`;
}

function ordenar(arr, type){
    let nums = [];
    for (var i = 0; i < arr.length; i++)
        nums.push(parseInt(arr[i][1]));

    //ordenamos el array (sin volcado)
    switch (type) {
        case "to-up":nums.sort((a, b) => a-b);break; //de menor a mayor
        case "to-down":nums.sort((a, b) => b-a);break; //de mayor a menor
        default:break;
    }
    cadena = "";
    //cargamos el array ordenado en una cadena
    for (let i = 0; i < nums.length; i++)
        cadena += nums[i]+", ";
    //devolvemos la cadena
    return cadena;
}

//apartado D
let resD = document.querySelector("#res-d");
function imprimirMayMen(){
    let nums = [];
    for (var i = 0; i < listaSevilla.length; i++)
        nums.push(parseInt(listaSevilla[i][1]));
    for (var i = 0; i < listaHuelva.length; i++)
        nums.push(parseInt(listaHuelva[i][1]));
    for (var i = 0; i < listaCadiz.length; i++)
        nums.push(parseInt(listaCadiz[i][1]));

    //ordenamos de mayor a menor y cogemos los extremos posteriormente (así obtenemos el max y min de todo)
        nums.sort((a, b) => a-b);
   

    resD.innerHTML = `<b>c) MÍNIMO Y MÁXIMO (DE LAS 3 DELEGACIONES):</b><br>
                        MÍNIMO: ${nums[0]}<br>
                        MÁXIMO: ${nums[nums.length-1]}`;
}