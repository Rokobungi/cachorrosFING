function definirEstilos(){
	var estilo = document.createElement("STYLE");
	var texto = document.createTextNode("\
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;900&display=swap');\
		#pTitulo{\
			font-size: 24px;\
			font-family: 'Montserrat', sans-serif;\
			line-height: 80%;\
		}\
		#pDescripcion{\
			ont-size: 14px;\
			font-family: 'Montserrat', sans-serif;\
			margin-left: 10px;\
		}\
	");
	estilo.appendChild(texto);
	document.head.appendChild(estilo);
}

/*
function llamarFuente(){
	var enlace = document.createElement("LINK");
	enlace.setAttribute("rel","stylesheet");
	enlace.setAttribute("href","https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
	document.head.appendChild(enlace);
}
*/
