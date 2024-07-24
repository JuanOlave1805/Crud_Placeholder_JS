export default (letras);

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