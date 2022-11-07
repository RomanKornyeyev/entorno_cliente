function sombrear(pos){
    document.querySelector(`#ej${pos}`).classList.toggle("box-shadow-1");
    setTimeout(() => { document.querySelector(`#ej${pos}`).classList.toggle("box-shadow-1"); }, 1000);
}