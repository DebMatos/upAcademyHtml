

$(document).ready(function () {
    console.log("ready!");

});

var numAlunos;
var contaClique = 0;
var ListaAlunos = [];

function Aluno(numero, nota) {
    this.numero = numero;
    this.nota = nota;
}


$("button").click(function () {
    contaClique++;
    Nalunos();
    CriaAlunos();
    console.log(numAlunos);
    console.log(contaClique);
    console.log(ListaAlunos);
    $("input").val("");

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

        ListaAlunos.push(AlunoNovo);

        $("#divTab").html(getTable());
        novaLinha();


    }

    if (contaClique > numAlunos) {
        $("#btnSub").hide();
        $("#lblDinamica").hide();
        $("#ipt").hide();
    }

}

function getTable() {

    return `<table style="width:100%">
    <tr>
      <th>Numero do aluno:</th>
      <th>Nota</th> 
     
    </tr>
   
  </table>`;
}

function novaLinha() {

    $("table").append("<tr><td>N</td><td>Nota1</td></tr>");
}

