function AgregarFila() {
    var elemento = document.getElementById("tabla");

        // Crea las celdas
        for (var i = 0; i < 1; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");
        
            for (var j = 0; j < 2; j++) {
              // Crea un elemento <td> y un nodo de texto, haz que el nodo de
              // texto sea el contenido de <td>, ubica el elemento <td> al final
              // de la hilera de la tabla
              var celda = document.createElement("td");
              var textoCelda = document.createTextNode(
                "celda {" + i + "," + j + "}",
              );
              
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
            }
        
            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            elemento.appendChild(hilera);
          }

}