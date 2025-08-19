// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteado = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if( amigo == '') {
        alert("Por favor, inserte un nombre.")
    }
    else if (!amigos.includes(amigo)) {
        amigos.push(amigo);
        amigosSorteado.push(amigo);
        limpiarCampo();
        actualizarLista();
        amigos.pop();
    } else {
        alert("El nombre ya existe");
    }
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    for(i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        lista.appendChild(elemento);
        elemento.innerHTML = amigos[i];
    };
}

function sortearAmigo() {
    if (amigosSorteado.length == 0) {
        alert("Por favor ingrese algún amigo")
    }
    else {
    let numeroGenerado = Math.floor(Math.random()*amigosSorteado.length);
    let usuarioGanador = document.querySelector('#resultado');
    usuarioGanador.innerHTML = amigosSorteado[numeroGenerado];
    alert(`!!!!!Has ganado ${amigosSorteado[numeroGenerado]}¡¡¡¡¡`)
    }
}
