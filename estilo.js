function llamarFuente(fuente){
  var enlace = document.createElement("LINK");
  enlace.setAttribute("rel","stylesheet");
  enlace.setAttribute("href",fuente);
  document.head.appendChild(enlace);
}

function definirEstilos(fuente){
  var estilo = document.createElement("STYLE");
  var texto = document.createTextNode("\
		@font-face {\
			font-family: "+fuente+"\
    }\
    .titulo{\
      font-size: 32px;\
			font-family: "+fuente+"\
			margin-left: 20px;\
    }\
    .descripcion{\
      ont-size: 20px;\
			font-family: "+fuente+"\
			margin-left: 10px;\
    }\
  ");
  estilo.appendChild(texto);
  document.head.appendChiled(estilo);
}
