/**
 * Operadores en JavaScript
 * ------------------------
 * Este archivo documenta los principales operadores en JavaScript.
 * Útil como referencia rápida.
 */
// ------------------------
// Operadores Aritméticos
// ------------------------
/**
 * Suma: +
 * Suma dos valores.
 * Ejemplo:
 */
let suma = 5 + 3; // Resultado: 8
/**
 * Resta: -
 * Resta un valor de otro.
 * Ejemplo:
 */
let resta = 5 - 3; // Resultado: 2
/**
 * Multiplicación: *
 * Multiplica dos valores.
 * Ejemplo:
 */
let multiplicacion = 5 * 3; // Resultado: 15
/**
 * División: /
 * Divide un valor entre otro.
 * Ejemplo:
 */
let division = 6 / 3; // Resultado: 2
/**
 * Módulo (resto): %
 * Devuelve el resto de la división.
 * Ejemplo:
 */
let modulo = 5 % 2; // Resultado: 1
/**
 * Exponenciación: **
 * Calcula la potencia de un número.
 * Ejemplo:
 */
let potencia = 2 ** 3; // Resultado: 8
/**
 * Incremento: ++
 * Incrementa un valor en 1.
 * Ejemplo:
 */
let a = 5;
a++; // Resultado: 6
/**
 * Decremento: --
 * Decrementa un valor en 1.
 * Ejemplo:
 */
let b = 5;
b--; // Resultado: 4
// ------------------------
// Operadores de Asignación
// ------------------------
/**
 * Asignación: =
 * Asigna un valor a una variable.
 * Ejemplo:
 */
let x = 10; // x ahora es 10
/**
 * Asignación con suma: +=
 * Suma un valor a la variable y la reasigna.
 * Ejemplo:
 */
x += 5; // x ahora es 15
/**
 * Asignación con resta: -=
 * Resta un valor a la variable y la reasigna.
 * Ejemplo:
 */
x -= 3; // x ahora es 12
/**
 * Asignación con multiplicación: *=
 * Multiplica un valor a la variable y la reasigna.
 * Ejemplo:
 */
x *= 2; // x ahora es 24
/**
 * Asignación con división: /=
 * Divide un valor a la variable y la reasigna.
 * Ejemplo:
 */
x /= 4; // x ahora es 6
/**
 * Asignación con módulo: %=
 * Calcula el módulo y lo reasigna.
 * Ejemplo:
 */
x %= 2; // x ahora es 0
// ------------------------
// Operadores Comparativos
// ------------------------
/**
 * Igualdad: ==
 * Compara si dos valores son iguales (sin importar el tipo).
 * Ejemplo:
 */
let igualdad = (5 == "5"); // Resultado: true
/**
 * Estrictamente igual: ===
 * Compara si dos valores y tipos son iguales.
 * Ejemplo:
 */
let estrictamenteIgual = (5 === "5"); // Resultado: false
/**
 * Diferente: !=
 * Compara si dos valores son diferentes.
 * Ejemplo:
 */
let diferente = (5 != "5"); // Resultado: false
/**
 * Estrictamente diferente: !==
 * Compara si dos valores o tipos son diferentes.
 * Ejemplo:
 */
let estrictamenteDiferente = (5 !== "5"); // Resultado: true
/**
 * Mayor que: >
 * Comprueba si un valor es mayor que otro.
 * Ejemplo:
 */
let mayorQue = (5 > 3); // Resultado: true
/**
 * Menor que: <
 * Comprueba si un valor es menor que otro.
 * Ejemplo:
 */
let menorQue = (5 < 3); // Resultado: false
/**
 * Mayor o igual: >=
 * Comprueba si un valor es mayor o igual a otro.
 * Ejemplo:
 */
let mayorIgual = (5 >= 5); // Resultado: true
/**
 * Menor o igual: <=
 * Comprueba si un valor es menor o igual a otro.
 * Ejemplo:
 */
let menorIgual = (5 <= 3); // Resultado: false
// ------------------------
// Operadores Lógicos
// ------------------------
/**
 * Y lógico: &&
 * Devuelve true si ambos valores son verdaderos.
 * Ejemplo:
 */
let yLogico = (true && false); // Resultado: false
/**
 * O lógico: ||
 * Devuelve true si al menos un valor es verdadero.
 * Ejemplo:
 */
let oLogico = (true || false); // Resultado: true
/**
 * Negación lógica: !
 * Invierte el valor lógico.
 * Ejemplo:
 */
let negacion = !true; // Resultado: false
// ------------------------
// Operador Ternario
// ------------------------
/**
 * Operador ternario: ? :
 * Asigna un valor según una condición.
 * Ejemplo:
 */
let edad = 18;
let permiso = (edad >= 18) ? "Adulto" : "Menor"; // Resultado: "Adulto"

const fecha = new Date();
