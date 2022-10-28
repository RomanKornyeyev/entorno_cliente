//a la informacion de esta pagina la llamaremos ->"Inicial" 
function abrirVentana(){
	//almacena la apertura de una nueva ventana	
	let vs = window.open("VentanaSecundaria.html");	//esta ventana la llamaremos "secundaria"
	let sMensajeInput = document.getElementById('idUrl').value;//almacena la informacion del input
	vs.onload=function(){//al cargar la pagina "secundadia" ejecutara esta funcion
		//toma el elemento de HTML con id "texto" y lo cambiar por el texto asignado
		vs.document.getElementById("texto").innerHTML=sMensajeInput;
	}	
}
