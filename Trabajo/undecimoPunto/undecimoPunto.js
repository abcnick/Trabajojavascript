let frase= prompt("Escribe una frase");
let contador = 0;
for (let i = 0; i < frase.length; i++){
 if (frase.substr(i,1) === "a" || 
     frase.substr(i,1) === "e" || 
     frase.substr(i,1) === "i" || 
     frase.substr(i,1) === "o" ||
     frase.substr(i,1) === "u") {

        contador=contador+1;
 };
};
document.write("hay "+contador+ " vocales ");