
// A $( document ).ready() block. So corre se houver html, se o link do jQuery entiver na head e necessario
$( document ).ready(function() {
    console.log( "ready!" );

    $( "#target" ).click(function() {
    $('h1').css("color",'purple')
      });

    $(".conteudo").html(getImage("https://cinema10.com.br/upload/noticias/dorybeluga2.jpg","gffgete"))


    

});

function getImage(srcImage,altImage){

    return `<img src="${srcImage}" alt="${altImage}">`;

}


function getTable(){

    return `<table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </table>`;
}