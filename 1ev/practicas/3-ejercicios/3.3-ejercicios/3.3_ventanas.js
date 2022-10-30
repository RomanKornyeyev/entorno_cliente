const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const res = document.querySelector("#resultados1");

abrir.addEventListener("click", abrirVentana);

function abrirVentana() {
	let url = document.querySelector('#url').value;
	let vs = window.open(url, "ventana1", "width=720,height=480");

	cerrar.addEventListener("click", cerrarVentana);
	function cerrarVentana() { if (!vs.closed) vs.close(); }
	// extra (CONTADOR)
	function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

	async function contar() {
		for (i = 10; i > 0; i--) {
			if (!vs.closed){
				res.innerHTML = `La ventana secundaria se cerrará en: ${i} segundos`;
				await sleep(1000);
			}else{
				break;
			}
		}
		res.innerHTML = 'Ventana cerrada';
	}
	//extra (contador)
	contar();

	setTimeout(() => { if (!vs.closed) vs.close(); }, 10000);
}

