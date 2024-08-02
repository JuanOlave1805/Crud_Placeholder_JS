import {default as inputValidos} from "./inputValidos.js";
import {default as letras} from "./modulo.js";
import {default as numeros} from "./validacionNumeros.js";
import {check, send, opcionesSelect, mostrar, opcionesSelector, filtrar} from "./modulo.js";

// Seleccionar el elemento del DOM
const $select = document.querySelector("#tipoDocumento");

const $inputNombre = document.querySelector("#inputNombre");
const $inputApellido = document.querySelector("#inputApellido");
const $inputTelefono = document.querySelector("#inputTelefono");
const $inputDireccion = document.querySelector("#inputDireccion");
const $inputDocumento = document.querySelector("#inputDocumento");
const $checkbox = document.querySelector("#checkbox");
const $inputEmail = document.querySelector("#inputEmail");
const $btnEnviar = document.querySelector("#btnEnviar");
const $form = document.querySelector('#formulario');
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


$form.addEventListener("submit", (event) =>{

    const hola = "form [required]";
    let reponse = inputValidos(event, hola)

    const objeto = {
        nombre: $inputNombre.value,
        apellido: $inputApellido.value,
        telefono: $inputTelefono.value,
        direccion: $inputDireccion.value,
        tipo: $tipoDoc.value,
        id: $inputDocumento.value,
        email: $inputEmail.value
    }
    console.log(objeto)
    
    if(reponse){
        send(event,objeto)
    }
})

// const listar = async () => {
//     const $framento = document.createDocumentFragment();
//     const $tabla = document.getElementById('tabla'); // Asegúrate de que este sea el ID correcto de la tabla en tu HTML
    
//     // Obtenemos los datos
//     const datos = await mostrar();

    
//     datos.forEach(element => {
//         let idElement = element.tipo;
//         const filtro = filtrar().then(
//             data => {
//                 // console.log($framento)
//                 data.forEach(element2 => {
                    
//                     if (element2.id === idElement){
//                         // console.log(element2.id)
                        
//                         let nombre  = element2.name
//                         const $tr = document.createElement('tr');
//                         const $td1 = document.createElement('td');
//                         const $td2 = document.createElement('td');
//                         const $td3 = document.createElement('td');
//                         const $td4 = document.createElement('td');
//                         const $td5 = document.createElement('td');
//                         const $td6 = document.createElement('td');
//                         const $td7 = document.createElement('td');


//                         $td1.textContent = element.id;
//                         $td2.textContent = element.nombre; 
//                         $td3.textContent = element.apellido;
//                         $td4.textContent = element.telefono;
//                         $td5.textContent = element.direccion; 
//                         $td6.textContent = nombre; 
//                         $td7.textContent = element.email;   


//                         $tr.classList.add("casilla");
//                         $tr.appendChild($td1);
//                         $tr.appendChild($td2);
//                         $tr.appendChild($td3);
//                         $tr.appendChild($td4);
//                         $tr.appendChild($td5);
//                         $tr.appendChild($td6);
//                         $tr.appendChild($td7);


//                         $framento.appendChild($tr);
//                         // console.log($framento)
//                         return $framento;
//                     }
//                 })
//             });

//             // console.log($framento)
//         // return $framento;    
//     });
//     console.log($framento);
//     // console.log($tabla);
//     $tabla.appendChild($framento);
// }

const listar = async () => {
    const $framento = document.createDocumentFragment();
    const $tabla = document.getElementById('tabla'); // Asegúrate de que este sea el ID correcto de la tabla en tu HTML
   
    // Obtenemos los datos
    const datos = await mostrar();

    const promesas = datos.map(async element => {
        let idElement = element.tipo;
        const data = await filtrar("documento");

        data.forEach(element2 => {
            if (element2.id === idElement) {

                let nombre  = element2.name;
                const $tr = document.createElement('tr');
                const $td1 = document.createElement('td');
                const $td2 = document.createElement('td');
                const $td3 = document.createElement('td');
                const $td4 = document.createElement('td');
                const $td5 = document.createElement('td');
                const $td6 = document.createElement('td');
                const $td7 = document.createElement('td');
                $td1.textContent = element.id;
                $td2.textContent = element.nombre;
                $td3.textContent = element.apellido;
                $td4.textContent = element.telefono;
                $td5.textContent = element.direccion;
                $td6.textContent = nombre;
                $td7.textContent = element.email;   
                $tr.classList.add("casilla");
                $tr.appendChild($td1);
                $tr.appendChild($td2);
                $tr.appendChild($td3);
                $tr.appendChild($td4);
                $tr.appendChild($td5);
                $tr.appendChild($td6);
                $tr.appendChild($td7);

                $framento.appendChild($tr);
            }
        });
    });

    // Espera a que todas las promesas se resuelvan
    await Promise.all(promesas);

    // Agrega el fragmento a la tabla
    $tabla.appendChild($framento);
}

// Crear las opciones del select
// datos.forEach(element => {
//     const $opcion = document.createElement("option");
//     $opcion.innerText = element.name; // O element.nombre dependiendo de la estructura de tu JSON
//     $opcion.setAttribute('value', `${element.id}`);
//     $select.appendChild($opcion);
// });

addEventListener("DOMContentLoaded", (event) => {
    let respuesta = opcionesSelector("documento").then
    (data => {
        console.log(data.length);
        const $fragmento = document.createDocumentFragment();
        const $opcion = document.createElement("option");
        $opcion.innerText = "Seleccionar"; 
        $opcion.setAttribute('value', "");
        $fragmento.appendChild($opcion);

        // Crear las opciones del select
        data.forEach(element => {
            console.log(element.name)
            const $opcion = document.createElement("option");
            $opcion.innerText = element.name; 
            $opcion.setAttribute('value', element.id);
            $fragmento.appendChild($opcion);
        });
        $select.appendChild($fragmento);
    })
    

    if(!$checkbox.checked){
        $btnEnviar.setAttribute("disabled", "");
    }
    listar();
})
$checkbox.addEventListener("change", function (e) {
    if(e.target.checked){
        $btnEnviar.removeAttribute("disabled")
    }
})