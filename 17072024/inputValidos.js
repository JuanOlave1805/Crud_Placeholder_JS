const dom = document;
const inputValidos = (event, form) => {
    
    event.preventDefault();
    const elemento = dom.querySelectorAll(form);
    
    
    let bandera = true;
    elemento.forEach(elemento => {
        if (elemento.value === "") {
            elemento.classList.add("inputRed");
            bandera = false;
        }
    });
    return bandera;
}
export default inputValidos;