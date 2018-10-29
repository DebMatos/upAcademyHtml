
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

function main() {

    

   // GetExtra(pedidos);

}

function changetextbox() {
   

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

        <table id="tab" class="table table-hover text-center">
        <thead class="thead-dark ">
            <tr>
                <th>Produto</th>
                <th>Informação especial</th>

            </tr>
        </thead>
    </table>
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
    limpaArtigo();
}


function AddPedido(){
    var date=new Date;
    var index=date.getUTCMilliseconds();
    pedido=new pedido;
    pedido.id=index;
    pedido.nomeCliente=$("#Nome").val();
    pedido.descricao=arrayDescricao;

   pedidos.push(pedido);
    console.log(pedidos);
    limpaTudo();
}

function limpaArtigo(){
    $("#pedido1").val('');
    $("#extra").val('');
    $("#cbExtra").prop('checked',false);
    if ($("#cbExtra").prop('checked') == true) {

        $("#extra").attr("disabled", "disabled");
    }
}

function limpaTudo(){
    limpaArtigo();
    $("#Nome").val('');
    $("#tab").remove();
    
}