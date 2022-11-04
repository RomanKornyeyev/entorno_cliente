//ejer 1
const abrir1 = document.querySelector("#abrir1");
abrir1.addEventListener("click", abrirVentana1);

function abrirVentana1() {
	let url1 = document.querySelector('#url1').value;
	let v1 = window.open(url1, "ventana1", "width=300,height=200,scrollbars=YES");
	v1.moveTo(500,500);
	v1.scrollTo(0, document.body.scrollHeight);
}

//ejer 2
const abrir2 = document.querySelector("#abrir2");
const res2 = document.querySelector("#resultados2");
abrir2.addEventListener("click", abrirVentana2);

function abrirVentana2() {
	let aleatorio = Math.round(Math.random()*3);
	let url2 = "";
	switch (aleatorio) {
		case 0: url2="https://mail.google.com/mail/"; break;
        case 1: url2="https://correoweb.educa.madrid.org/"; break;        
        case 2: url2="https://es.yahoo.com/"; break;
        case 3: url2="https://outlook.live.com/"; break;
        default:break;
	}

	let v2 = window.open(url2, "ventana2", "width=500,height=500,scrollbars=YES");
	res2.innerHTML = `${aleatorio}: ${url2}`;
}

//ejer 3
const abrir3 = document.querySelector("#abrir3");
abrir3.addEventListener("click", abrirVentana3);

function abrirVentana3(){
	let w = screen.width;
	let h = screen.height / 2;

	let v3 = window.open("https://www.w3schools.com", "ventana2", `width=${w},height=${h}`);

	if (!cookieEnabled){ 
        document.cookie = "testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie")!=-1;
    }
}