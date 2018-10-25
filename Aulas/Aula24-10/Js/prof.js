

$(document).ready(function () {
    console.log("ready!");

});

var numAlunos;
var contaClique = 0;
var ListaAlunos = [];
var numero=0;

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
        $("#divTab").html(novaLinha());


    }

    if (contaClique > numAlunos) {
        $("#part1").hide();
        // $("#lblDinamica").hide();
        // $("#ipt").hide();
    }

}

function getTable() {

    return `
    <table class="table table-hover text-center">
    <thead class="thead-dark ">
    <tr>
      <th>Numero do aluno</th>
      <th>Nota</th> 
     
    </tr>
   </thead>
  </table>`
  ;
}

function novaLinha() {
for (let index = 0; index < ListaAlunos.length; index++) {
     $("table").append("<tr class='table-hover text-center'><td>"+ListaAlunos[index].numero+"</td><td>"+ListaAlunos[index].nota+"</td></tr>");
    
}
   
}

