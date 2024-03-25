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


// addEventListener es un método en JavaScript que permite adjuntar un evento a un elemento HTML, de manera que cuando ocurra ese evento en el elemento, 
// se ejecute una función específica. En este caso, el evento que estamos escuchando es 'input', 
// que se activa cada vez que el valor del elemento cambia, como cuando el usuario ingresa texto en un cuadro de texto.