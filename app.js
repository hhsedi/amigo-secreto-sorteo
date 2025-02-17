// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim()){
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarCaja();
        agregarLista();
       
    }else{
        alert('Porfavor ingrese un nombre en el campo');
    }
    
    return

}
function agregarLista(){
    listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = "";
    for(let i = 0 ; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


function limpiarCaja(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}
function sortearAmigo(){
    if (amigos.length == 0){
        alert("Porfavor ingrese nombres para realizar el sorteo")
    }else{
        let cantidad = amigos.length;
        let indiceAmigo = Math.floor(Math.random()* cantidad)
        console.log(amigos[indiceAmigo])
        resultado = document.getElementById('resultado')
        let li = document.createElement('li')
        li.textContent = amigos[indiceAmigo];
        resultado.appendChild(li);
    }
}