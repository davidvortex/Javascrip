// crear mi objeto
const Deportes = {
futbol:20,
Basquetbol:30,
voleybol:40,
tenis:{
    rojo:51,
    azul:52
    },
americano:60
}

// una variable para obtener el valor dentro de una anidacion para botener el valor del dicho equipo en este caso
const tenis = Deportes['tenis']['azul'];

console.log(Deportes)

console.log(tenis)


//muestra atributos dentro de la primera llave impresion
console.log(Object.keys(Deportes))
//muestra los valores de la primera llave en una sola impresion
console.log(Object.values(Deportes))

// este for me muestra los valores por separado
for (const key in Deportes) {
    const element = Deportes[key];
    console.log(element)
}


// este tipo de ejercicios propiedades de objetos pero se puede enlazar con otros objetos o añadir mas objetos
const ejericicio = {
    ... Deportes,
    Gym:200,
    fisicultirista:300
}

console.log(ejericicio)

const {Gym, fisicultirista, ...nada} = ejericicio
console.log(Gym)