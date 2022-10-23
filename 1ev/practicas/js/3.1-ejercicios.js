//Ejer 1
let e = document.querySelector("#e1_opc");
let valor = e.value;
let texto = e.options[e.selectedIndex].text;
let resultados1 = document.querySelector("#resultados1");

function onChange() {
    valor = e.value;
    texto = e.options[e.selectedIndex].text;
    console.log(valor, texto);

    let time = new Date();
    //primera inyección en HTML, para que no tarde en actualizar al cambiar la opción
    if(valor == 1) resultados1.innerHTML = time.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit'});
    else resultados1.innerHTML = time.toLocaleTimeString('en-US', { hour12: false });
}
onChange(); // ejecutamos la función para que cargue el valor inicial por defecto (celsius)
e.onchange = onChange; // cada vez que se cambie se actualiza

function ejercicio1(){
    const interval = setInterval(() => {
        let time = new Date();
        //según el select del HTML, se ejecuta 12H o 24H
        if(valor == 1) resultados1.innerHTML = time.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit'});
        else resultados1.innerHTML = time.toLocaleTimeString('en-US', { hour12: false });
    }, 1000);
}
ejercicio1();
