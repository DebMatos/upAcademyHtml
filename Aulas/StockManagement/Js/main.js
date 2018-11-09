
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

    $("#container").html('<div class="row"><div class="col-md-8"><div id="tab"><table id="datatable" class="table  table-bordered " cellspacing="0" width="100%"><thead class="text-center thead-light "><tr><th>Id</th><th>PVP</th><th>Discount Value</th><th>IVA</th></tr></thead><tbody id="tBodyP" class="text-center "></tbody></table></div></div><div class="col-md-2"><button type="button" class="btn btn-info">Update</button><button type="button" class="btn btn-danger">DELETE</button></div></div>');
    getProducts();
});

function getProducts() {
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'GET',
        contentType: 'application/json',
        success: function (products) {
            console.log(products);

            for(var i=0; i<products.length; i++){
             linhasTabela("#tBodyP", products[i]) 
            }
        }
    });
}


function linhasTabela(idTBody, product) {

    $(idTBody).append("<tr class='linha' class='table-hover text-center '><td>" + product.id + "</td><td>" + product.pvp + "</td><td>" + product.discountValue + "</td><td>" + product.iva + "</td></tr>");
}

function linhasTabShelves(idTBody, shelf) {

    $(idTBody).append("<tr class='linha' class='table-hover text-center '><td>" + shelf.id + "</td><td>" + shelf.capacity + "</td><td>" + shelf.productId + "</td><td>" + shelf.rentPrice + "</td></tr>");
}




// Shelves
$("#navShel").on("click", function () {
    $(".navbar-brand").text("Shelves");

    $("#container").html('<div class="row"><div class="col-md-8"><div id="tab"><table id="datatable" class="table  table-bordered " cellspacing="0" width="100%"><thead class="text-center thead-light "><tr><th>Id</th><th>Capacity</th><th>Product Id</th><th>Rent Price</th></tr></thead><tbody id="tBodyP" class="text-center "></tbody></table></div></div><div class="col-md-2"><button type="button" class="btn btn-warning">Insert</button><button type="button" class="btn btn-info">Update</button><button type="button" class="btn btn-danger">DELETE</button></div></div>');
    getShelves();
});

function getShelves() {
    $.ajax({

        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'GET',
        contentType: 'application/json',
        success: function (shelves) {
            console.log(shelves);

            for(var i=0; i<shelves.length; i++){
             linhasTabShelves("#tBodyP", shelves[i]) 
            }
        }
    });
}











