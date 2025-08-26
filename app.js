let listaDeAmigos = []; 

function agregarAmigo() {
    
    let amigo = document.getElementById('amigo').value;

    
    if (amigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    else {
        
        listaDeAmigos.push(amigo);

        
        limpiar();

        
        actualizarLista();
        
        
       document.getElementById('reset').disabled = false;
    }
}

function actualizarLista() {
    let amigo = document.getElementById('listaAmigos'); 

    amigo.innerHTML = ''; 

    for (let i = 0; i < listaDeAmigos.length; i++) { 
        let nombre = listaDeAmigos[i]; 
        let li = document.createElement('li'); 

        li.innerHTML = nombre; 
        amigo.appendChild(li); 
    }
}

function limpiar() {
     document.getElementById('amigo').value = '';
}

function sortearAmigo() { 
    
    if(listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    
    if (listaDeAmigos.length === 1) {
        alert("No hay suficientes amigos para sortear");
        return;
    }
    
    let amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    
    document.getElementById('resultado').innerHTML = 'El amigo secreto es: ' + amigoSecreto;
}

function limpiar() {
     document.getElementById('amigo').value = ''; 
}

function nuevoSorteo() {
    document.getElementById('resultado').innerHTML = '';
    listaDeAmigos = []; 
    
    document.getElementById('reset').disabled = true; 

    actualizarLista(); 
}
