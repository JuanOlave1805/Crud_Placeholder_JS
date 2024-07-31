import inputValidos from ".././inputValidos.js";

const $nombre = document.querySelector("#nombre");
const $formulario = document.querySelector("form")

$formulario.addEventListener("submit", (event) =>{
    let reponse = inputValidos(event, "form [required]")

    const objeto = {
        name: $nombre.value
    }

    console.log(objeto)
    if(reponse){
        fetch('http://localhost:3000/documento', {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
})
