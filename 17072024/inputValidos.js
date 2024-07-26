const dom = document;
const inputValidos = (event, form) => {
    let elementos = dom.querySelectorAll(form);
    console.log(elementos);
    event.preventDefault();
    let bandera = true;
    elementos.forEach(elementos => {
        if (elementos.value === "") {
            elementos.classList.add("inputRed");
            bandera = false;
        }
    });
    return bandera;
}
export default inputValidos;