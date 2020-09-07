let frase= prompt("Escribe una frase");
let contadora = 0;
let contadore = 0;
let contadori = 0;
let contadoro = 0;
let contadoru = 0;

for (let i = 0; i < frase.length; i++){
    if (frase.substr(i,1) == "a"){
        contadora=contadora+1;
    }else if(frase.substr(i,1) == "e"){
        contadore=contadore+1;
    }else if(frase.substr(i,1) == "i"){
        contadori=contadori+1;
    }else if(frase.substr(i,1) == "o"){
        contadoro=contadoro+1;
    }else if(frase.substr(i,1) == "u"){
        contadoru=contadoru+1;
    }
}
document.write("hay "+contadora+ " letras a "+ "</br> ")
document.write("hay "+contadore+ " letras e "+ "</br> ")
document.write("hay "+contadori+ " letras i "+ "</br> ")
document.write("hay "+contadoro+ " letras o "+ "</br> ")
document.write("hay "+contadoru+ " letras u "+ "</br> ")