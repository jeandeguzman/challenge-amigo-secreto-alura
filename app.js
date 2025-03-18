// Inicializamos la lista de amigos que vayamos ingresando
let listaAmigosIngresados = [];

function limpiarEntrada() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    // Se agrega una variable que captura la entrada del cuadro de texto
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validación de campo vacío
    if(nuevoAmigo === "") {
        alert("Por favor, inserte un nombre válido.");

    } else {
        //Actualiza la lista de amigos
        listaAmigosIngresados.push(nuevoAmigo);
        
        //Muestra en  la consola la entrada ingresada, la lista actualizada y la cant. de elementos
        console.log(nuevoAmigo);
        console.log(listaAmigosIngresados);
        console.log(listaAmigosIngresados.length);

        limpiarEntrada(); // Limpia el campo de texto después de agregar
        actualizarListaAmigos(); //Actualiza la lista HTML de amigos con el nombre ingresado
    }
    return;

}

function actualizarListaAmigos() {
    //Obtenemos los elementos de la lista HTML donde mostrar los amigos
    let lista = document.querySelector('#listaAmigos');

    //Limpiamos la lista HTML existente
    lista.innerHTML = "";

    // Iteramos sobre la lista
    for (let i = 0; i < listaAmigosIngresados.length; i++) {
    
        // Creamos un elemento nuevo de lista
        let nuevoElemento = document.createElement('li');

        // Mostramos el elemento nuevo en la web
        nuevoElemento.innerText = listaAmigosIngresados[i];

        //Añadimos el elemento nuevo a la lista
        lista.appendChild(nuevoElemento);
    }
    return;
}

function sortearAmigo() {

    if (listaAmigosIngresados.length === 0) {
        alert("No hay amigos para sortear."); //Verificamos que hayan amigos en la lista
        return;
    }
    else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigosIngresados.length); //número aleatorio que correponde al amigo secreto
        console.log(indiceAleatorio)

        // Elegimos el amigo de la lista que corresponda con el número aleatorio sorteado
        let amigoSecreto = listaAmigosIngresados[indiceAleatorio];
        console.log(amigoSecreto)

        // Mostramos el nombre del amigo secreto
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${amigoSecreto}</li>`;
    }
    return;

}
