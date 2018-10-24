


// funcoes para o index.html
// conta os espacoes e mostra 
function mostrar() {


    var input1 = document.getElementById("text").value;
    var input2 = document.getElementById("text2").value;

    document.getElementById("hConta1").innerHTML = contar(input1);
    document.getElementById("hConta2").innerHTML = contar(input2)
}

function contar(x) {


    var count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == " ") {
            count += 1;
        }

    }
    return count;


}

//ordena
// var teste = 0;
function ordena(num) {
    // teste++;
    // if (teste > 5) {
    //     return console.log("a");
    // }

    var verif = false;
    for (var i = 0; i < num.length - 1; i++) {

        if (parseInt(num[i]) < parseInt(num[i + 1])) {
            verif = true;
            var extra = num[i];
            num[i] = num[i + 1];
            num[i + 1] = extra;


        }

    }
    if (verif == true) {
        return ordena(num)
    } else {
        return num;
    }

}

function mostraResultado() {


    var ordenar = document.getElementById("ordenar").value;


    document.getElementById("ordenados").innerHTML = ordena(ordenar.split(""));

}

// recebendo uma sequência de números do user coloca um “ - “ entre cada dois números pares e um “#” entre cada dois ímpares.

function analisa(numero) {
var resultado="";
    for (var i = 0; i < numero.length - 1; i++) {

        if (parseInt(numero[i])% 2 == 0 && parseInt(numero[i + 1]) % 2 == 0) {

          
            numero[i] = numero[i]+"-";
           
        }
        if(parseInt(numero[i])% 2 != 0 && parseInt(numero[i + 1]) % 2 != 0){
            numero[i] = numero[i]+"#";
        }

    }
    for (var i = 0; i < numero.length; i++){
        resultado += numero[i];
    }
return resultado;


}

function mostraRes() {


    var ordenar = document.getElementById("analizar").value;


    document.getElementById("resultado").innerHTML = analisa(ordenar.split(""));

}