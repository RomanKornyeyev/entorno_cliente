const formulario = document.getElementById('cosa');

formulario.addEventListener("submit", p => {
    p.preventDefault();
   fetch("http://127.0.0.1:8080/index.php", {
    method: "POST",
    body: new FormData(formulario)
   }).then(res => res.json())
        .then(data => console.log(data));
});