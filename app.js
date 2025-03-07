let listaAmigos = [];

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    listaAmigos.push(nombreAmigo);
    console.log(listaAmigos);
    console.log(listaAmigos.length) 
    limpiarCaja();  
}

function sortearAmigo() {
        if (listaAmigos.length === 0) {
            alert('Todos lo nombres han sido sorteados');
            return;
        }
        else{
            let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            let nombreSorteado = listaAmigos.splice(indiceAleatorio, 1)[0];
        
            alert('Tu amigo secreto es '+ nombreSorteado);
        }
       
    }
     


