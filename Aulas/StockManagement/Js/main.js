


// nav bar active item        
$(".nav-item").on("click", function () {
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});




// Dashboard
$("#navDash").on("click", function () {
    $(".navbar-brand").text("Dashboard");
    $("#container").html("");
});

// Products
$("#navProd").on("click", function () {
    $(".navbar-brand").text("Products");

    $("#container").html('<div class="row"><div class="col-md-8"><div id="tab"><table id="datatable" class="table  table-bordered " cellspacing="0" width="100%"><thead class="text-center thead-light "><tr><th><input type="checkbox"></th><th>Id</th><th>PVP</th><th>Discount Value</th><th>IVA</th></tr></thead><tbody id="tBodyP" class="text-center "></tbody></table></div></div><div class="col-md-2"><button type="button" class="btn btn-info">Update</button><button type="button" class="btn btn-danger">DELETE</button></div></div>');
    getProducts();
});

function getProducts() {
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'GET',
        contentType: 'application/json',
        success: function (products) {
            console.log(products);

            for (var i = 0; i < products.length; i++) {
                linhasTabela("#tBodyP", products[i])
            }
        }
    });
}


function linhasTabela(idTBody, product) {

    $(idTBody).append("<tr class='linha' class='table-hover text-center '><td><input type='checkbox'></td><td>" + product.id + "</td><td>" + product.pvp + "</td><td>" + product.discountValue + "</td><td>" + product.iva + "</td></tr>");
}

function linhasTabShelves(idTBody, shelf) {

    $(idTBody).append("<tr class='linha' class='table-hover text-center '><td><input type='checkbox'></td><td>" + shelf.id + "</td><td>" + shelf.capacity + "</td><td>" + shelf.productId + "</td><td>" + shelf.rentPrice + "</td></tr>");
}




// Shelves
$("#navShel").on("click", function () {
    $(".navbar-brand").text("Shelves");

    $("#container").html('<div class="row"><div class="col-md-1"></div><div class="col-md-8"><div id="tab"><table id="datatable" class="table  table-bordered " cellspacing="0" width="100%"><thead class="text-center thead-light "><tr><th>Id</th><th>Capacity</th><th>Product Id</th><th>Rent Price</th></tr></thead><tbody id="tBodyP" class="text-center "></tbody></table></div></div><div class="col-md-2 " style="padding-top:12vh;"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#squarespaceModal">Insert</button><button type="button" class="btn btn-info id="upd">Update</button><button type="button" class="btn btn-danger" id="del">DELETE</button></div><div class="col-md-1"></div></div>');
    getShelves();
    data();
    select();
});

function getShelves() {
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'GET',
        contentType: 'application/json',
        success: function (shelves) {
            console.log(shelves);




        }
    });
}


function data() {

    $('#datatable').DataTable({

        ajax: {

            url: "https://mcupacademy.herokuapp.com/api/Shelves",
            dataSrc: ''
        },
        columns: [
            { data: 'id' }, { data: 'capacity' }, { data: 'productId' }, { data: 'rentPrice' }
        ]
    });




}

var idLinha = "";
capLinha;
rentLinha;
prodIdLinha;
function select() {
    var table = $('#datatable').DataTable();

    $('#datatable tbody').on('click', 'tr', function () {


        if ($(this).hasClass('table-active')) {
            $(this).removeClass('table-active');

        }
        else {
            table.$('tr.table-active').removeClass('table-active');
            $(this).addClass('table-active');
            var linhaS = table.row(this).data();
            idLinha = linhaS.id;
            capLinha=linhaS.capacity;
            rentLinha=linhaS.rentPrice;
            prodIdLinha=linhaS.productId;

            console.log(idLinha);
        }
    });

    //botao delete
    $('#del').click(function () {

        $.ajax({

            url: "https://mcupacademy.herokuapp.com/api/Shelves/" + idLinha,
            type: 'DELETE',
            success: function (data) {
                console.log(data);

                table.row('.table-active').remove().draw(false);


            }
        });

    });

}

//botao update
$('#upd').click(function () {
    var s = new Shelf;
    s.capacity = $("#capacityIn").val();
    s.productId = $("#productIdIn").val();
    s.rentPrice = $("#rentPriceIn").val();
    var myJSON = JSON.stringify(s);
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Shelves/" + idLinha+"replace",
        type: 'POST',
        contentType: 'application/json',
        data: myJSON,
        success: function () {
            $("#status").text("Product updated");
            $("#message").text("Insert other product or close");
            limpaModal();
        },
        error: function () {
            $("#status").text("Error");
        }
    });

});

}

//Botao save insert
$('#salvar').click(function () {

    var s = new Shelf;
    s.capacity = $("#capacityIn").val();
    s.productId = $("#productIdIn").val();
    s.rentPrice = $("#rentPriceIn").val();


if($("#capacityIn").val!=""&$("#productIdIn").val!=""&$("#rentPriceIn").val!=""){
   
    var myJSON = JSON.stringify(s);
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'POST',
        contentType: 'application/json',
        data: myJSON,
        success: function () {
            $("#status").text("Product inserted");
            $("#message").text("Insert other product or close");
            limpaModal();
        },
        error: function () {
            $("#status").text("Error");
        }






    });
}
});



//Botao close insert
$('#close').click(function () {

    $('#datatable').DataTable().ajax.reload();
})



$(".form-control").change(function () {
        $("#status").text("");
    });

function limpaModal() {
    $("#capacityIn").val('');
    $("#productIdIn").val('');
    $("#rentPriceIn").val('');
}