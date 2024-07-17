import { opcionesSelect, send, mostrar } from './modulo.js';
opcionesSelect();

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



const listar = async () => {
    const $framento = document.createDocumentFragment();
    const $tabla = document.getElementById('tabla'); // Asegúrate de que este sea el ID correcto de la tabla en tu HTML
    
    // Obtenemos los datos
    const datos = await mostrar();

    datos.forEach(element => {
        const $tr = document.createElement('tr');
        const $td1 = document.createElement('td');
        const $td2 = document.createElement('td');
        const $td3 = document.createElement('td');
        const $td4 = document.createElement('td');
        const $td5 = document.createElement('td');
        const $td6 = document.createElement('td');
        const $td7 = document.createElement('td');
        const $td8 = document.createElement('td');


        $td1.textContent = element.id;
        $td2.textContent = element.nombre; 
        $td3.textContent = element.apellido;
        $td4.textContent = element.documento;
        $td5.textContent = element.tipo_documento; 
        $td6.textContent = element.correo;   
        $td7.textContent = element.direccion;   


        $tr.classList.add("casilla");
        $tr.appendChild($td1);
        $tr.appendChild($td2);
        $tr.appendChild($td3);
        $tr.appendChild($td4);
        $tr.appendChild($td5);
        $tr.appendChild($td6);
        $tr.appendChild($td7);


        $framento.appendChild($tr);    
    });

    $tabla.appendChild($framento);
}

// Llamamos a la función lista para ejecutar el código
listar();