import { llamar, send } from './modulo.js';
llamar();

const $form = document.querySelector("#formulario");

const validacion = (event) => {
    
    event.preventDefault();
    
    // Capturando los valores de los inputs usando querySelector
    let input_id = document.querySelector('#input_id').value.trim();
    let input_name = document.querySelector('#input_name').value.trim();
    let input_apellido = document.querySelector('#input_apellido').value.trim();
    let input_document = document.querySelector('#input_document').value.trim();
    let input_correo = document.querySelector('#input_correo').value.trim();
    let input_direccion = document.querySelector('#input_direccion').value.trim();
    let input_tipo = document.querySelector('#tipo_documento')

    // Validar si algún campo está vacío
    if (!input_id || !input_name || !input_apellido || !input_document || !input_correo || !input_direccion) {
        alert("Error: Por favor llene todos los campos.");
        return;
    }

    // Validar el formato del correo electrónico
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(input_correo)) {
        alert("Error: Por favor ingrese un correo electrónico válido.");
        return;
    }

    alert("Todos los campos son válidos.");
    console.log()
    const datos = {
        id: input_id,
        nombre: input_name,
        apellido: input_apellido,
        documento: input_document,
        tipo_documento: input_tipo.value,
        correo: input_correo,
        direccion: input_direccion,
    };
    
    send(datos);
    
}

$form.addEventListener("submit", validacion);




const tabla = {
    
}