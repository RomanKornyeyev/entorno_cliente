// let botones = document.querySelectorAll(".button-nav");

// for(let i = 0; i < botones.length; i++){
//     botones[i].addEventListener("click", sombrear(i));
// }

function sombrear(pos){
    document.querySelector(`#ej${pos}`).classList.remove("box-shadow-1");
    document.querySelector(`#ej${pos}`).classList.add("box-shadow-1");
}