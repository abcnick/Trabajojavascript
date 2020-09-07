let frase= prompt("Escribe una frase");
let contador = 0;
for (let i = 0; i < frase.length; i++){
 if (frase.substr(i,1) == "a") {
 contador=contador+1;
 };
};
document.write("hay "+contador+ " letras a");