

class Livro {
    constructor(titulo, autor, imagem, descricao) {
        this.titulo = titulo;
        this.autor = autor;
        // this.categoria = categoria;
        this.imagem = imagem;
        this.descricao = descricao;
        this.numberLikes = 0;
    }
    addLike() {
        this.numberLikes++;
    }
}



var listaLivros = [];
//var busca = "a";
var listaLikes=[];
var listaDisLikes=[];

function getInfo() {
    var maxRes = 40;
   var busca = $("#termo").val();
var num=0;
    $.ajax({

        url: "https://www.googleapis.com/books/v1/volumes?q=" + busca + "&maxResults=" + maxRes + "&startIndex=" + num,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(busca);

            for (var i = 0; i < data.items.length; i++) {

                if (data.items[i].volumeInfo.authors != undefined) {

                    if (data.items[i].volumeInfo.imageLinks!= undefined) {

                        var imagem = data.items[i].volumeInfo.imageLinks.thumbnail;
                        var titulo = data.items[i].volumeInfo.title;
                        // var categoria = data.items[i].volumeInfo.categories[0];
                        var autor = data.items[i].volumeInfo.authors[0];
                        var descricao = data.items[i].volumeInfo.description;


                        let l = new Livro(titulo, autor, imagem, descricao);

                        listaLivros.push(l);
                       
                        console.log(listaLivros);
                     
                    }
                }
            }

   mostraCard();
num+=41;



        }
    });


}

function Like() {     
   
   
    listaLivros[0].addLike();
   
     listaLikes.push(listaLivros[0]);
     console.log(listaLikes);
    listaLivros.shift();  

    mostraCard();
}

function disLike() {     
   
   
    listaLivros[0].addLike();
   
     listaDisLikes.push(listaLivros[0]);
     console.log(listaDisLikes);
    listaLivros.shift();  

    mostraCard();
}

function mostraCard() {


    $("#imagemB").attr("src", listaLivros[0].imagem);
    $("#titulo").text( listaLivros[0].titulo);
    //$("#categoria").text(l.categoria);
    $("#des").text(listaLivros[0].descricao);
    $("#autor").text("By " + listaLivros[0].autor);

}
