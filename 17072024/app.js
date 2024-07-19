const $inputId = document.querySelector("#inputId");
const $inputNombre = document.querySelector("#inputNombre");
const $inputApellido = document.querySelector("#inputApellido");
const $inputTelefono = document.querySelector("#inputTelefono");
const $inputDireccion = document.querySelector("#inputDireccion");
const $inputDocumento = document.querySelector("#inputDocumento");
const $inputEmail = document.querySelector("#inputEmail");


const letras = (event, elemento) => {
    console.log(event)
    let expresion = /^[a-zA-ZAà-ÿ]+$/;
    if (!expresion.test(event.key)){
        event.preventDefault();
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
    }
    else if(elemento.value.trim()){
        const $span = document.createElement('span');
        elemento.appendChild($span);
        $span.textContent = "Por favor inserta tu nombre";
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
    }
    else{
        elemento.classList.remove("inputRed");
        elemento.classList.add("inputGreend");
    }
};
const numeros = (event, elemento) => {
    // console.log(event)
    console.log(elemento)
    let expresion = /^\d$/;
    if (!expresion.test(event.key)){
        event.preventDefault();
    }else{
        const elem1 = elemento.value.length === 10;
        if(elem1){
            event.preventDefault();
            elemento.classList.remove("inputRed");
            elemento.classList.add("inputGreend");
        }
        else{
            elemento.classList.remove("inputGreend");
            elemento.classList.add("inputRed");
        }
    }
    
}

// const validacionEmail = (event) => {
//     let expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
//     if(expresion.test(event.value) ){
// 		alert('Email is valid, continue with form submission');
// 		return true;
// 	}else{
// 		alert('Email is invalid, skip form submission');
//         event.preventDefault();
// 		return false;
// 	}
// }



$inputId.addEventListener("keyup", (event) =>{
    numeros(event, $inputId);
});
$inputNombre.addEventListener("keypress", (event) =>{
    letras(event, $inputNombre);
});
$inputApellido.addEventListener("keypress", (event) =>{
    letras(event, $inputApellido);
});
$inputTelefono.addEventListener("keyup", (event) =>{
    numeros(event, $inputTelefono);
});
$inputDireccion.addEventListener("keypress", (event) =>{
    letras(event, $inputDireccion);
});
$inputDocumento.addEventListener("keyup", (event) =>{
    numeros(event, $inputDocumento);
});
// $inputEmail.addEventListener("blur", validacionEmail(event))