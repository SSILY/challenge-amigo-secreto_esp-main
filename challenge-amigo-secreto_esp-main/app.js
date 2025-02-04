// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Obtenemos el valor del input y eliminamos espacios en blanco

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Salimos si no hay nombre
    }

    // Agregamos el nombre al array
    amigos.push(nombre);
    input.value = ''; // Limpiamos el input
    mostrarLista(); // Actualizamos la lista
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista existente

    // Iteramos sobre el array
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Titulo del elemento de la lista
        listaAmigos.appendChild(li); // Agregamos el elemento
    }
}

// Sortear un amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade algunos nombres.');
        return; // Salimos si no hay amigos en la lista
    }

    // Seleccionamos un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiamos el resultado anterior
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}