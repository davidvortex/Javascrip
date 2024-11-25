//programa una función que cuente en numero de caracteres de una cadena de texto

//tomando en cuenta sobre nuestro boton y mandandolo
document.getElementById('Agregar').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe

    // Obtener el valor de la entrada este caso insertaragregar
    const texto = document.getElementById('InsertarAgregar').value;

    // Contar el número de caracteres contandolo de constante de texto
    const numeroDeCaracteres = contarCaracteres(texto);

    // Mostrar el número de caracteres en el párrafo aqui ya enseñamos en el contenedor
    document.getElementById('Contador').textContent = "Número de caracteres: " + numeroDeCaracteres;

    // Agregar el texto a la lista
    const lista = document.getElementById('Lista');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;
    lista.appendChild(nuevoElemento);

    // Limpiar el campo de texto después de agregar
    document.getElementById('InsertarAgregar').value = '';
});

// Función para contar el número de caracteres
function contarCaracteres(cadena) {
    return cadena.length; //necesitamos usar la funcion de lenght para contar cadenas
}

