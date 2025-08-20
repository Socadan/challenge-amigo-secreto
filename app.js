let listaDeAmigos = [];

//función para el botón añadir
function agregarAmigo() {
    let amigoDelUsuario = document.getElementById("amigo").value;
    
    if (amigoDelUsuario === "") {
        alert("Por favor, ingrese un nombre");
    
    } else {
        if (listaDeAmigos.includes(amigoDelUsuario) == true) {
            alert(`El nombre ${amigoDelUsuario} ya existe`)
        } else {
            listaDeAmigos.push(amigoDelUsuario);
        }
    }
    console.log(listaDeAmigos);
    console.log(listaDeAmigos.length);

        document.getElementById("amigo").value = "";
        mostrarListaDeAmigos();
}

//esta función muestra los amigos que se han ido subiendo
function mostrarListaDeAmigos() {
    let listaDeAmigosHTML = document.getElementById("listaAmigos");
    listaDeAmigosHTML.innerHTML = "";
    listaDeAmigos.forEach(amigo => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaDeAmigosHTML.appendChild(nuevoElemento);
    });
} 

//esta función realiza el sorteo
function sortearAmigo() {
    let numeroDeAmigos = listaDeAmigos.length;
    let numeroAleatorio = 0;
    let mostrarResultado;

    if(numeroDeAmigos < 3 || numeroDeAmigos > 10) {
        alert("Por favor, inserte un mínimo de 3 nombres y un máximo de 10");
    } else {
            numeroAleatorio = Math.floor(Math.random()*numeroDeAmigos);
        mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = `El amigo secreto es ${listaDeAmigos[numeroAleatorio]}`
        }
        
    }