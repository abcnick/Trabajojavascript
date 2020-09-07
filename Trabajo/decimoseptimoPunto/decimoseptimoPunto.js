let Numero = prompt("Escribe un número");
let i = 2;
while (Numero % i != 0 && i < Numero/2 ) {
i++;
}
if (Numero % i != 0) {
document.write("El numero es primo");
} else {
document.write("El numero no es primo");
}