let numero = prompt("Escribe un número");

for (let i=1; i <= numero/2; i++) {
if (numero % i == 0) {
document.write(i,",");
}
}