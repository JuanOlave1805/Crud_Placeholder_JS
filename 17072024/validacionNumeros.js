export default (numeros);
function numeros(event, elemento){
    // console.log(elemento)
    let numero = event.target.value.length;
    let expresion = /^\d{1,10}$/;
    if (numero < 10){
        if (!expresion.test(event.key)){
            event.preventDefault();
        }
    }
    else{
        event.preventDefault();
    } 
}