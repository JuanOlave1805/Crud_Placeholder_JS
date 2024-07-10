export async function llamar() {
    try {
        // Seleccionar el elemento del DOM
        const $select = document.querySelector("#tipo_documento");

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


export const send = async(datos) => {
    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export async function mostrar(){
    try {
        // Seleccionar el elemento del DOM
        const $select = document.querySelector("#tipo_documento");

        // Obtener datos del servidor
        const respuesta = await fetch("http://localhost:3000/usuario");

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
            const $fragment = document.createDocumentFragment();
            const $casilla = document.createElement("tr");
            const $casillita1 = document.createElement("td");
            const $casillita2 = document.createElement("td")
            const $casillita3 = document.createElement("td")
            const $casillita4 = document.createElement("td")
            const $casillita5 = document.createElement("td")
            const $casillita6 = document.createElement("td")
            const $casillita7 = document.createElement("td")
            
            $casilla.appendChild($casillita1);
            $casilla.appendChild($casillita2);
            $casilla.appendChild($casillita3);
            $casilla.appendChild($casillita4);
            $casilla.appendChild($casillita5);
            $casilla.appendChild($casillita6);
            $casilla.appendChild($casillita7);

            $casillita1.innerText = element.id;
            $casillita2.innerText = element.nombre;
            $casillita3.innerText = element.apellido;
            $casillita4.innerText = element.documento;
            $casillita5.innerText = element.tipo_documento;
            $casillita6.innerText = element.correo;
            $casillita7.innerText = element.direccion;
            $select.appendChild($opcion);
        });

    } catch (error) {
        console.error("Error en la función llamar:", error);
    }
}