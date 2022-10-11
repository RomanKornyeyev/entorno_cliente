let boton = document.querySelector(".button-nav");

boton.addEventListener("click", prueba);

function prueba(){
    document.querySelector(".card").classList.remove("box-shadow-1");
    document.querySelector(".card").classList.add("box-shadow-1");
}