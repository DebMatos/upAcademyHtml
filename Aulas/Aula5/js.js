


// funcoes para o index.html
// conta os espacoes e mostra 
function mostrar() {
   

    var input1 = document.getElementById("text").value;
    var input2= document.getElementById("text2").value;

    document.getElementById("hConta1").innerHTML=contar(input1);
    document.getElementById("hConta2").innerHTML=contar(input2)
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

function ordena(num){
    var count = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] >num[i+1]) {
            var extra=num[i]
            num[i]=num[i+1]
            num[i+1]=extra
        }
        
    }
    console.log(num)
    return num;

}

function mostrar() {
   

    var ordenar = document.getElementById("ordenar").value;
   

    document.getElementById("ordenados").innerHTML=ordena(ordenar);
   
}