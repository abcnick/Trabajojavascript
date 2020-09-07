let primerNumero = prompt("Escribe el primer numero");
let SegundoNumero = prompt("Escribe el segundo numero");
let numeroMenor;

if (primerNumero <= SegundoNumero) {
numeroMenor = primerNumero;
}
else {
numeroMenor = SegundoNumero;
}

for (let i=2; i <= numeroMenor / 2; i++) {
if (primerNumero % i == 0 && SegundoNumero % i == 0) {
document.write(i,", ");
}
}