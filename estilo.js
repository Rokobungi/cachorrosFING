function llamarFuente(){
	var enlace = document.createElement("LINK");
	enlace.setAttribute("rel","stylesheet");
	enlace.setAttribute("href","https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
	document.head.appendChild(enlace);
}

function definirEstilos(){
	var estilo = document.createElement("STYLE");
	var texto = document.createTextNode("\
		@font-face {\
		font-family: "+fuente+"\
		}\
		.titulo{\
			font-size: 32px;\
			font-family: 'Montserrat', sans-serif;\
			margin-left: 20px;\
		}\
		.descripcion{\
			ont-size: 20px;\
			font-family: 'Montserrat', sans-serif;\
			margin-left: 10px;\
		}\
	");
	estilo.appendChild(texto);
	document.head.appendChild(estilo);
}
