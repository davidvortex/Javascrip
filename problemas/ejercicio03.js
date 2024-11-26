// progama una función que dada un string te devuelva un array de textos separados 


// Función que recibe un string y lo divide en un array de textos separados por espacios
function separarTexto(inputString) {
    // Se divide el string por espacios y se devuelve como un array
    return inputString.split(' ');
}

// Ejemplo de uso
let texto = "Hola, este es un ejemplo de texto";
let resultado = separarTexto(texto);
console.log(resultado);
