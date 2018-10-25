
var numAlunos;
var contaClique = 0;
var listaAlunos = [];
var numero = 0;
var notaRef=0;
var media = 0;

class Aluno {
    constructor(numero, nota) {
        this.numero = numero;
        this.nota = nota;
    }
}




$("button").click(function () {
    contaClique++;
    Nalunos();
    CriaAlunos();

    console.log(numAlunos);
    console.log(contaClique);
    console.log(listaAlunos);
    $("input").val("");
$("input").focus();
});

function Nalunos() {
    if (contaClique == 1) {
        numAlunos = parseInt($("input").val());
        //console.log((typeof(numAlunos)));

    }
}




function CriaAlunos() {
    if (contaClique > 0) {
        var texto = "";

        texto = "Insira a nota do " + contaClique + " º aluno:";
        $("#lblDinamica").text(texto);
    }


    if (contaClique > 1) {
        AlunoNovo = new Aluno;
        AlunoNovo.numero = contaClique - 1;
        AlunoNovo.nota = parseInt($("input").val());

        listaAlunos.push(AlunoNovo);

        $("#divTab").html(getTable());
        $("#divTab").html(novaLinha());


    }
    if (contaClique==numAlunos+1) {
        $("#lblDinamica").text("Insira a nota do numero de referencia:");
        notaRef=parseInt($("input").val()); 
    }
    if (contaClique>numAlunos+1) {
        
       
        // $("#lblDinamica").hide();
        $("#mostraMedia").html("A media é "+ Media()+ " sendo a nota de referencia "+ notaRef+" entao existe uma variacao de " +Desvio()+"%");
        $("#part1").hide();
        $("#mostraMedia").append( '<p class="text-center" ><button id="btnSub" class="btn btn-success">Refresh</button></p>');
    }

}

function getTable(num) {
    var str;
    return `
    <table class="table table-hover text-center">
    <thead class="thead-dark ">
    <tr>
      <th>Numero</th>
      <th>Nota</th> 
     
    </tr>
   </thead>
  </table>`
        ;
}

function novaLinha() {
    for (let index = 0; index < listaAlunos.length; index++) {
        $("table").append("<tr class='table-hover text-center'><td>" + listaAlunos[index].numero + "</td><td>" + listaAlunos[index].nota + "</td></tr>");

    }



}

function Media() {
 

    for (var i=0; i < listaAlunos.length; i++) {

       media += parseInt(listaAlunos[i].nota);
    }
    console.log(media,listaAlunos.l);
     return (media / listaAlunos.length);
    
}


function Desvio() {
   
var desvioRef=(media-notaRef)/media*100;
    
     return desvioRef;
    
}

function RefreshPag() {
    location.reload();
}