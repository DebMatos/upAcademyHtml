
 function main(){
// class pedido {
//     constructor(id, nomeCliente, pedido) {
//         this.id = id;
//         this.nomeCliente = nomeCliente;
//         this.pedido = pedido;
//     }
// }




// var pedidos = [
//     (pedido.id = 1,
//         pedido.nomeCliente = "Miguel",
//         pedido.descricao = [{ nome: "BigMac", extra: "natura" }, { nome: "Batatas", extra: "sem sal" }]),
//     (pedido.id = 2,
//         pedido.nomeCliente = "Pedro",
//         pedido.descricao = [{ nome: "Chave de fendas" }, { nome: "Batatas", extra: "sem sal" }]),
//     (pedido.id = 3,
//         pedido.nomeCliente = "Antonio",
//         pedido.descricao = [{ nome: "Arroz", extra: "Basmati" }])
// ]


var pedidos = [
    {
        id: 1,
        nomeCliente: "Miguel",
        descricao: [{ nome: "BigMac", extra: "natura" }, { nome: "Batatas", extra: "sem sal" }]
    },
    {
        id: 2, nomeCliente: "Pedro",
        descricao: [{ nome: "Chave de fendas" }, {nome: "Batatas", extra: "sem sal" }]
    },
    {
    id: 3, nomeCliente: "Antonio", descricao: [{ nome: "Arroz", extra: "Basmati" }]
}
]

GetExtra(pedidos);

    }

function GetExtra(pedidos) {
    
    var pComExtra = [];

    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];
        

        for (var j = 0; j < pActual.descricao.length; j++) {

            var order = pActual.descricao[j];
            
            console.log(order)

           if(order.extra && pComExtra.indexOf(pActual)== -1){
               pComExtra.push(pActual);
           }

        }
    }
    return console.log(pComExtra);

}


