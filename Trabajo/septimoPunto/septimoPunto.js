//septimo punto
let primerNumero =prompt("ingrese el primer numero","");
let segundoNumero =prompt("ingrese el segundo numero","");
let tercerNumero =prompt("ingrese el tercer numero","");

let arreglo = [parseInt(primerNumero),parseInt(segundoNumero),parseInt(tercerNumero),];

function orden(a, b) {
    return a - b;
  }
document.write("el numero mayor es" + arreglo.sort(orden)[2] );