const balones = ["americano", "futbol", "basquet", "boley", "playa"];

const Formulario = document.getElementById('Agregar');
const Insertar = document.getElementById('InsertarAgregar');
const Lista = document.getElementById('Lista');

// Mostrar los elementos actuales en la lista (como ya tengo elementos)
balones.forEach(function (balon) {
    const li = document.createElement('li');
    li.textContent = balon;
    Lista.appendChild(li); // tengo que hacer referencia a mi elento
});

Formulario.addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que se recargue la página

    // Aqui puedo obtener el valor y quitar espacios extras
    const NuevoElemento = Insertar.value.trim();  

    // Si el campo no está vacío, agregar el nuevo elemento al arreglo
    if (NuevoElemento !== '') {
        balones.(NuevoElemento);  // Agregar el nuevo elemento al arreglo

        // Deberia de crear un nuevo punto con el nombre del balón y añadirlo en la lista
        const li = document.createElement('li');
        li.textContent = NuevoElemento;
        Lista.append(li);

        // Limpiar el campo de entrada
        Insertar.value = '';
    }
});


/*
// Modificar el valor del segundo balón (índice 1)
balones[3] = 'puma';

// Recorrer el arreglo con un bucle for
for (let i = 0; i < balones.length; i++) {
    console.log(balones[i]);
}

// Otra forma de recorrer el arreglo con forEach (corrigiendo el parámetro del callback)

balones.forEach(balon => {
    console.log(balon);
});
*/
/* arreglos de map,filter,find, slice */

// utiliznado .map la diferencia esta entre que un forEach es un arreglo viejo mientras em .map es un arreglo total mente nuevo

const tipo = balones.map(balones => {
    return balones
});
console.log(tipo);


// manera de  .map simplificada
const CantidadBalones = balones.map((balones,index) => balones+'-'+index);
console.log(CantidadBalones);

const BalonAmericano = balones.filter(balone => {
    return balone.includes('a')
});

console.log(BalonAmericano);

// manera de .filter simplifiacaion 
const BalonesFutbol = balones.filter(balones => balones == "futbol");
console.log(BalonesFutbol);


//mertodo de .find se utiliza para busqueda de un elemento que coincida con lo que queremos buscar
const PrimerElemento = balones.find (balones => balones == 'playa');
console.log(PrimerElemento)


const UsarSlice = balones.slice(1,3);
console.log(UsarSlice)
