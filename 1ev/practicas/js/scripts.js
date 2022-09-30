const contenido = document.getElementById("contenido");

let nombre = "Roman Kr";
let edad = 12;
let info = ["Román", "Kornyeyev", "26 años"];


contenido.innerHTML = `<h2>${nombre}</h2>`;
contenido.innerHTML += `<h2>${edad}</h2>`;

for(let i = 0; i < 11; i++){
    console.log(i);
    if(i%2==0){
        contenido.innerHTML += `${i}`;
    }
}

contenido.innerHTML += `<p>${nombre.substring(2, 3)}</p>`;
contenido.innerHTML += `<p>${info}</p>`;
info.forEach(element => {
    contenido.innerHTML += `${element}&nbsp;&nbsp;`;
});