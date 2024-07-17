export async function opcionesSelect() {
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

export const mostrar=async()=>{
    const data=await fetch("http://localhost:3000/usuario");
    const dato=await data.json();
    return dato
  }