//programa una función que cuente en numero de caracteres de una cadena de texto
document.getElementById('Agregar').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe

    // Obtener el valor del input
    const texto = document.getElementById('InsertarAgregar').value;

    // Contar el número de caracteres
    const numeroDeCaracteres = contarCaracteres(texto);

    // Mostrar el número de caracteres en el párrafo
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
    return cadena.length;
}

