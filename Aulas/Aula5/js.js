



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

