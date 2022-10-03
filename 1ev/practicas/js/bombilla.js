const contenido = document.getElementById("container");
function encender(){
    document.getElementById("bombilla").style.backgroundImage="url('../img/bombilla_encendida.png')";
}
function apagar(){
    document.getElementById("bombilla").style.backgroundImage="url('../img/bombilla_apagada.png')";
}