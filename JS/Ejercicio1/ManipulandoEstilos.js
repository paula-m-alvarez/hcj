let boton = document.getElementById("botonCambiaEstilos");

function cambiarEstilo(fuente, tamaño, color) {
    if (confirm("Esta seguro que desea cambiar los estilos del texto?")) {
        let texto = document.getElementById("texto");

        texto.style.fontFamily = fuente;
        texto.style.fontSize = tamaño;
        texto.style.color = color;
    } 
}