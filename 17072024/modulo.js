export default (letras);
export const send = async(event,objeto
) => {
    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


export const mostrar=async()=>{
    const data=await fetch("http://localhost:3000/usuario");
    const dato=await data.json();
    return dato
  }

export const check = (checkBox, btn) => {
    if(checkBox.checked){
        btn.removeAtribute("disabled");
        console.log("Todo preparado");
    }
    else{
        btn.setAttribute("disabled", "");
        console.log("No esta listo para mandar");
    }
}

export async function opcionesSelect() {
    try {
        // Seleccionar el elemento del DOM
        const $select = document.querySelector("#tipoDocumento");

        // Obtener datos del servidor
        const respuesta = await fetch("http://localhost:3000/documento");

        // Verificar si la solicitud fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
        }

        // Parsear los datos JSON
        const datos = await respuesta.json();

        // Asegurarse de que `datos` es un array
        if (!Array.isArray(datos)) {
            throw new Error("El formato de los datos no es un array");
        }

        // Crear las opciones del select
        datos.forEach(element => {
            const $opcion = document.createElement("option");
            $opcion.innerText = element.name; // O element.nombre dependiendo de la estructura de tu JSON
            $opcion.setAttribute('value', `${element.id}`);
            $select.appendChild($opcion);
        });

    } catch (error) {
        console.error("Error en la función llamar:", error);
    }
}

function letras (event, elemento) {
    let expresion = /^[a-zA-ZAà-ÿ]+$/;
    if (!expresion.test(event.key)){
        event.preventDefault();
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
        
    }
    else if(elemento.value.trim()){
        const $span = document.createElement('span');
        elemento.appendChild($span);
        $span.textContent = "Por favor ingresa tu nombre";
        elemento.classList.remove("inputGreend");
        elemento.classList.add("inputRed");
    }
    else{
        elemento.classList.remove("inputRed");
        elemento.classList.add("inputGreend");
    }
}