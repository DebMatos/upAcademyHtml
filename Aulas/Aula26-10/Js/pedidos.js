
class pedido {
    constructor(id, nomeCliente, descricao) {
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.descricao = descricao;
    }
}

class produto {
    constructor(nome, extra) {
        this.nome = nome;
        this.extra = extra;

    }
}
var nome = "";
var arrayDescricao = [];
var pedidos=[];
var index=0;
function main() {

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


    // var pedidos = [
    //     {
    //         id: 1,
    //         nomeCliente: "Miguel",
    //         descricao: [{ nome: "BigMac", extra: "natura" }, { nome: "Batatas", extra: "sem sal" }]
    //     },
    //     {
    //         id: 2, nomeCliente: "Pedro",
    //         descricao: [{ nome: "Chave de fendas" }, { nome: "Batatas", extra: "sem sal" }]
    //     },
    //     {
    //         id: 3, nomeCliente: "Antonio", descricao: [{ nome: "Arroz", extra: "Basmati" }]
    //     }
    // ]

    GetExtra(pedidos);

}

function changetextbox() {
    //var checkBox=document.getElementById('cbExtra')

    if ($("#cbExtra").prop('checked') == true) {

        $("#extra").removeAttr("disabled");;
    } else {
        $("#extra").attr("disabled", "disabled");
    }
}

function GetExtra(pedidos) {

    var pComExtra = [];

    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];


        for (var j = 0; j < pActual.descricao.length; j++) {

            var order = pActual.descricao[j];


            if (order.extra && pComExtra.indexOf(pActual) == -1) {
                pComExtra.push(pActual);
            }

        }
    }
    return pComExtra;

}

function AddProd() {
    var nProduto = $("#pedido1").val();
    var especial = $("#extra").val();
    var nome = $("#Nome").val();
    if (nome != "") {


        $("#Nome").attr("disabled", "disabled");
        if (nProduto != "") {
            $("#tab").append("<tr class='table-hover text-center'><td>" + nProduto + "</td><td>" + especial + "</td></tr>");

            produto1 = new produto;
            produto1.nome = nProduto;
            produto1.extra = especial;

            arrayDescricao.push(produto1);
            console.log(arrayDescricao);
        }
    }
}


function AddPedido(){
    index+=1;
    pedido=new pedido;
    pedido.id=index;
    pedido.nomeCliente=$("#Nome").val();
    pedido.descricao=arrayDescricao;

pedidos.push(pedido);
    console.log(pedidos);
}
