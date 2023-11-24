let NumeroSecreto = 0
let contadorIntentos = 0;
let listaDeNumeroSecreto = [];
let numeroMaximo = 100
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto 
    return;  
}

function verificarIntento () {
    let numeroDesuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDesuario === NumeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero secreto en ${contadorIntentos} ${(contadorIntentos === 1) ? "vez" : "veces"}`)
        document.getElementById ("reiniciar").removeAttribute("disabled");

    }else{
        if (numeroDesuario > NumeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor")

        }else{
            asignarTextoElemento("p", "El numero secreto es mayor")
            
        }
        contadorIntentos++
        linpiarCaja();
    }
    return;
}

function linpiarCaja(){
    valorCaja = document.querySelector ("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    if(listaDeNumeroSecreto.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } else{
        listaDeNumeroSecreto.push(numeroGenerado)
        return numeroGenerado;
    }  
}

function apcionesIniciales(){
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento("p" ,`indica un número del 1 al ${numeroMaximo}`);
    contadorIntentos = 1;
    NumeroSecreto = generarNumeroSecreto();
   
}

function reiniciarJuego(){
    //limpiar caja
    linpiarCaja();
    //imdicar mensaje de inicio 
    //generar el numero aleatorio
    //reiniciar contador 
    apcionesIniciales();
    //desactivar voton de inicio 
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}
apcionesIniciales();


