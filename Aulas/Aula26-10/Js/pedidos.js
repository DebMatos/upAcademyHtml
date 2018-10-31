
class pedido {
    constructor(name, descricao) {
        this.name = name;
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
var pedidos = [];

function main() {



    // GetExtra(pedidos);

}

function changeTextBox() {


    if ($("#cbExtra").prop('checked') == true) {

        $("#extra").removeAttr("disabled");;
    } else {
        $("#extra").attr("disabled", "disabled");
    }
}

function GetExtra() {
    $("#tabFB").html('');
    var pComExtra = [];

    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];


        for (var j = 0; j < pActual.descricao.length; j++) {

            var order = pActual.descricao[j];


            if (order.extra) {

                $("#tabFB").append("<tr class='table-hover text-center'><td>" + pActual.name + "</td><td>" + pActual.descricao[j].nome + "</td><td>" + pActual.descricao[j].extra + "</td></tr>");
            }

        }
    }
    return pComExtra;

}

function AddProd() {
    var nProduto = $("#pedido1").val();
    var especial = $("#extra").val();
    //var nProduto = paramentrada.nome;
    //var especial = paramentrada.extra;
    var nome = $("#Nome").val();

    if (nome != "") {


        $("#Nome").attr("disabled", "disabled");
        if (nProduto != "") {


            produto1 = new produto;
            produto1.nome = nProduto;
            produto1.extra = especial;

            linhasTabela("#tabB", produto1)
            arrayDescricao.push(produto1);
            // console.log(arrayDescricao);

        }
    }
    limpaArtigo();
}


function linhasTabela(idTBody, produto) {

    $(idTBody).append("<tr class='linha' class='table-hover text-center'><td>" + produto.nome + "</td><td>" + produto.extra + "</td></tr>");
}


function AddPedido() {

    if ($("#Nome").val != '') {
        var date = new Date;
        var index = date.getUTCMilliseconds();
        let p = new pedido;
        p.name = $("#Nome").val();
        p.descricao = arrayDescricao;

        console.log(p);
        pedidos.push(p);
        postarNaApi(p);

        limpaTudo();
        refreshTable();
        todasFaturas();
    }



    arrayDescricao = [];
}

function limpaArtigo() {
    $("#pedido1").val('');
    $("#extra").val('');
    $("#cbExtra").prop('checked', false);


    $("#extra").attr("disabled", true);

}

function limpaTudo() {
    limpaArtigo();
    $("#Nome").val('');
    $("#tabB").html('');
    $("#Nome").attr("disabled", false);

}

function refreshTable() {
    var opt = $("#inputGroupSelect01 option:selected").val()


    switch (opt) {
        case '1':
            todosPedidos();
            break;
        case '2':
            GetExtra();
            break;
        case '3':

            break;

        default:
            break;
    }

}
$("#inputGroupSelect01").change(function () {
    refreshTable();

});

function todosPedidos() {
    $("#tabFB").html('');

    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];
        for (var j = 0; j < pActual.descricao.length; j++) {

            $("#tabFB").append("<tr class='table-hover text-center'><td>" + pActual.name + "</td><td>" + pActual.descricao[j].nome + "</td><td>" + pActual.descricao[j].extra + "</td></tr>");
        }


    }

}

function todasFaturas() {
    $("#divFaturas").html('');
    $("#divFaturas").html('<table id="tabFaturas" class="table table-hover text-center"><thead class="thead "><tr><th>Id</th><th>Nome produto</th><th>Extra</th></tr></thead><tbody id="tabBFaturas"></tbody>');
    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];
        for (var j = 0; j < pActual.descricao.length; j++) {

            $("#tabFaturas").append("<tr class='table-hover text-center'><td>" + pActual.id + "</td><td>" + pActual.descricao[j].nome + "</td><td>" + pActual.descricao[j].extra + "</td></tr>");
        }


    }

}

function faturaById() {
    $("#divFaturas").html('');
    $("#divFaturas").html('  <p id="id">Id:</p><p id="nCliente">Nome Cliente:</p><table id="tabFaturas" class="table table-hover text-center"><thead class="thead "><tr><th>Produto</th></th><th>Informação especial</th></tr></thead><tbody id="tabBFaturas"></tbody></table')

    if (($('#pesquisa').val() == "")) {
        todasFaturas();
    }


    for (var i = 0; i < pedidos.length; i++) {
        var pActual = pedidos[i];
        if ($('#pesquisa').val() == pActual.id) {
            $('#id').append(pActual.id);
            $('#nCliente').append(pActual.name);
            for (var j = 0; j < pActual.descricao.length; j++) {

                $("#tabBFaturas").append("<tr class='table-hover text-center'><td>" + pActual.descricao[j].nome + "</td><td>" + pActual.descricao[j].extra + "</td></tr>");
            }


        }


    }




}

function getInfo() {
    $.ajax({

        url: "http://192.168.0.122:3000/api/orders",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        }
    })
};

var testes;
function postarNaApi(fatura) {

    var myJSON = JSON.stringify(fatura);
    console.log(myJSON)
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'POST',
        contentType: 'application/json',
        data: myJSON,
        success: function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        },
        error: function (data) {
            testes = data;
        }
        
    })
};


