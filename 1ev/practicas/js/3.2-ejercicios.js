//Ejer 1
let fechaActual = new Date;
let annioActual = fechaActual.getFullYear(); //averiguamos el año actual

//definimos el fin del año
let finAnnio = new Date(annioActual, 11, 31, 23, 59, 59);
//variable para pasar ms a días
let diaMilisegundos = 1000 * 60 * 60 * 24; 

//calculamos los días restantes
let diasRestantes = Math.floor((finAnnio.getTime() - fechaActual.getTime()) / (diaMilisegundos));

// --- pintamos los resultados con un botón
let resultados = document.querySelector("#resultados1");
let boton = document.querySelector("#boton1");
boton.addEventListener("click", ejercicio1);
function ejercicio1(){resultados.innerHTML = `Quedan ${diasRestantes} para el fin de este año.`;}