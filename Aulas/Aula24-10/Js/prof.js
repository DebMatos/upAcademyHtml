

$(document).ready(function () {
    console.log("ready!");

});

$("button").click(function () {
    var numAlunos = parseInt($("input").val());
    //console.log((typeof(numAlunos)));
    console.log(numAlunos);
    $("input").val("");



});
