//progama una función que devuelva el texto recortado según numero de parámetro

// Función para recortar texto
function recortarTexto(texto, maxCaracteres) {
    if (texto.length <= maxCaracteres) {
        return texto;
    }
    return texto.slice(0, maxCaracteres) + "...";
}

// Espera a que el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRecortar");
    const resultados = document.getElementById("resultados");

    // Manejar el evento de envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Obtener los valores del formulario
        const texto = document.getElementById("texto").value;
        const maxCaracteres = parseInt(document.getElementById("maxCaracteres").value, 10);

        // Validar entrada
        if (isNaN(maxCaracteres) || maxCaracteres <= 0) {
            alert("Por favor, ingresa un número válido para el máximo de caracteres.");
            return;
        }

        // Recortar texto
        const textoRecortado = recortarTexto(texto, maxCaracteres);

        // Crear un nuevo elemento de lista
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = textoRecortado;

        // Agregar el elemento a la lista de resultados
        resultados.appendChild(nuevoElemento);

        // Limpiar los campos del formulario
        form.reset();
    });
});

