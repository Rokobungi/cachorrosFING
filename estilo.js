function llamarFuente(fuente){
  var enlace = document.createElement("LINK");
  enlace.setAttribute("rel","stylesheet");
  enlace.setAttribute("href",fuente);
  document.head.appendChild(enlace);
}
