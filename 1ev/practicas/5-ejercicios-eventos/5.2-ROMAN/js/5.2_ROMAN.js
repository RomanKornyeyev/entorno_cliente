let resultados1 = document.querySelector("#resultados1");
let resultados2 = document.querySelector("#resultados2");

window.addEventListener("mousemove", function (e){
    resultados1.innerHTML = `- Posición X: ${e.clientX} <br>
                            - Posición Y: ${e.clientY}`;
    resultados2.innerHTML = `- Posición Xr: ${e.screenX} <br>
                            - Posición Yr: ${e.screenY}`;
    console.log(e);
});