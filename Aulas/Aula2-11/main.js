

class Livro {
    constructor(titulo, autor, categoria, imagem) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.imagem = imagem;
        this.numberLikes = 0;
    }
    addLike(){
        this.numberLikes++;
    }
}





function getInfo() {
    $.ajax({

        url: "https://www.googleapis.com/books/v1/volumes?q=harrypotter",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);

            var imagem = data.items[0].volumeInfo.imageLinks.thumbnail;
            var titulo = data.items[0].volumeInfo.title;
            var categoria = data.items[0].volumeInfo.categories[0];
            var autor = data.items[0].volumeInfo.authors[0];
            console.log('imagem', imagem, 'titulo', titulo, 'categoria', categoria, 'autor', autor);


            var l = new Livro(titulo, autor, categoria, imagem);
            $("#imagemB").attr("src", l.imagem);

        }
    });


}