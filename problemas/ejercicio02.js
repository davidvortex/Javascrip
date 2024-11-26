// Función que recibe un string y un número, y devuelve el texto recortado según el número de caracteres
function recortarTexto(inputString, numCaracteres) {
    // Se utiliza el método .slice() para recortar el texto
    return inputString.slice(0, numCaracteres);
}

// Ejemplo de uso
let texto = "Hola, este es un ejemplo de texto largo";
let resultado = recortarTexto(texto, 15); // Recorta los primeros 15 caracteres
console.log(resultado); // Imprime "Hola, este es un"
