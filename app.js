//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("Bienvenido");
//variables:
let listaDeAmigos = [];
//-------------------------------------------
//funciones:
//función para el botón añadir - añade un amigo a la listaDeAmigos
function agregarAmigo() {
    //para capturar el contenido del input
    let amigoDelUsuario = document.getElementById("amigo").value;
    
    //verifica si está vacía la variable amigoDelUsuario o no
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
    //limpia el input
        document.getElementById("amigo").value = "";
    //muestra la lista de los amigos ingresados
        mostrarListaDeAmigos();
}

//funcion para mostrar en pantalla a los amigos que agregas a tu lista
function mostrarListaDeAmigos() {
    //conecta la lista de HTML con JS por medio del ID de HTML
    let listaDeAmigosHTML = document.getElementById("listaAmigos");

    //limpia la lista para no mostrar duplicados
    listaDeAmigosHTML.innerHTML = "";

    //recorre la lista y crea un nuevo elemento de la lista
    listaDeAmigos.forEach(amigo => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaDeAmigosHTML.appendChild(nuevoElemento);
    });
} 

//función para elegir a un amigo de la lista de amigos de manera aleatoria
function sortearAmigo() {
    let numeroDeAmigos = listaDeAmigos.length;
    let numeroAleatorio = 0;
    let mostrarResultado;

    if(numeroDeAmigos < 3 || numeroDeAmigos > 10) {
        //let mensaje = document.querySelector('h2');
        //mensaje.innerHTML = 'Por favor, ingrese un mínimo de 3 nombres y un máximo de 10'; 

        alert("Por favor, inserte un mínimo de 3 nombres y un máximo de 10");
    } else {
            numeroAleatorio = Math.floor(Math.random()*numeroDeAmigos);
        mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = `El amigo secreto es ${listaDeAmigos[numeroAleatorio]}`
        }
        
    }