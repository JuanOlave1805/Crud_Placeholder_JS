import {default as inputValidos} from "./inputValidos.js";
import {default as letras} from "./modulo.js";
import {default as numeros} from "./validacionNumeros.js";

const $inputId = document.querySelector("#inputId");
const $inputNombre = document.querySelector("#inputNombre");
const $inputApellido = document.querySelector("#inputApellido");
const $inputTelefono = document.querySelector("#inputTelefono");
const $inputDireccion = document.querySelector("#inputDireccion");
const $inputDocumento = document.querySelector("#inputDocumento");
const $inputEmail = document.querySelector("#inputEmail");
const $btnEnviar = document.querySelector("#btnEnviar");
const $form = document.querySelector('form');
const $tipoDoc = document.querySelector('#tipoDocumento');
 

// const letras = (event, elemento) => {
//     console.log(event)
//     let expresion = /^[a-zA-ZAà-ÿ]+$/;
//     if (!expresion.test(event.key)){
//         event.preventDefault();
//         elemento.classList.remove("inputGreend");
//         elemento.classList.add("inputRed");
//     }
//     else if(elemento.value.trim()){
//         const $span = document.createElement('span');
//         elemento.appendChild($span);
//         $span.textContent = "Por favor inserta tu nombre";
//         elemento.classList.remove("inputGreend");
//         elemento.classList.add("inputRed");
//     }
//     else{
//         elemento.classList.remove("inputRed");
//         elemento.classList.add("inputGreend");
//     }
// };


const validacionEmail = (event, elemento) => {
    let campo = event.target;
    let expresion =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;
    if(expresion.test(campo.value) ){
        elemento.classList.remove("inputRed");
        elemento.classList.add("inputGreend");  
		return true;
	}else{
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
        event.preventDefault();
		return false;
	}
}


function validarCampo(event, elemento) {
    // console.log(elemento)
    let numero = event.target.value.length;
    if (numero === 10){
        elemento.classList.remove("inputRed");
        elemento.classList.add("inputGreend");  
    }
    else{
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
        event.preventDefault();
    } 
}
function validarCampoLetras(event, elemento) {
    
    let numero = event.target.value.length;
    if (numero >= 2){
        elemento.classList.remove("inputRed");
        elemento.classList.add("inputGreend");  
    }
    else{
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
        event.preventDefault();
    }
}


// $inputId.addEventListener("keypress", (event) =>{
//     numeros(event, $inputId);
// });
// $inputId.addEventListener("blur", (event) =>{
//     validarCampo(event, $inputId)
// });


$inputNombre.addEventListener("keypress", (event) =>{
    letras(event, $inputNombre);
});
$inputNombre.addEventListener("blur", (event) =>{
    validarCampoLetras(event, $inputNombre);
});


$inputApellido.addEventListener("keypress", (event) =>{
    letras(event, $inputApellido);
});
$inputApellido.addEventListener("blur", (event) =>{
    validarCampoLetras(event, $inputApellido);
});


$inputTelefono.addEventListener("keypress", (event) =>{
    numeros(event, $inputTelefono);
});
$inputTelefono.addEventListener("blur", (event) =>{
    validarCampo(event, $inputTelefono)
});


$inputDireccion.addEventListener("keypress", (event) =>{
    letras(event, $inputDireccion);
});
$inputDireccion.addEventListener("blur", (event) =>{
    validarCampoLetras(event, $inputDireccion); 
});


$inputDocumento.addEventListener("keypress", (event) =>{
    numeros(event, $inputDocumento);
});
$inputDocumento.addEventListener("blur", (event) =>{
    validarCampo(event, $inputDocumento);
});


$inputEmail.addEventListener("blur", (event) =>{
    validacionEmail(event, $inputEmail)
})


$btnEnviar.addEventListener("submit", (event) =>{
    revisar(event);
})
$form.addEventListener("submit", (event) =>{
    let reponse = inputValidos(event, "form [required]")
    alert(reponse);
    let objeto = new {
        nombre: $inputNombre.value,
        apellido: $inputApellido.value,
        telefono: $inputTelefono.value,
        direccion: $inputDireccion.value,
        tipo: $tipoDoc.value,
        documento: $inputDocumento.value,
        email: $inputEmail.value
    }
})
function revisar(event){
    let input1 = $inputId.value;
    let input2 = $inputNombre.value;
    let input3 = $inputApellido.value;
    let input4 = $inputTelefono.value;
    let input5 = $inputDireccion.value;
    let input6 = $inputDocumento.value;
    let input7 = $inputEmail.value;
    console.log(input1, input2, input3, input4, input5, input6, input7)


    if(input1 =="" || input2 =="" || input3 =="" || input4 =="" || input5 || input6 =="" || input7 ==""){
        alert("Rellena todos los campos")
    }
    else{
        alert("Good")
    }
}