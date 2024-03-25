document.getElementById('inputTexto').addEventListener('input', function () {
    let textoIngresado = document.getElementById('inputTexto').value.toLowerCase();
    let textoAComparar = document.getElementById('spanAComparar').innerText.toLowerCase(); 

    if (textoIngresado === textoAComparar) {
        document.getElementById('spanResultado').innerText = 'Coincide';
        document.getElementById('spanResultado').style.color = 'green';
    } else {
        document.getElementById('spanResultado').innerText = 'No coincide';
        document.getElementById('spanResultado').style.color = 'red';
    }
});