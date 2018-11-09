function getInfo() {
    $.ajax({

        url: "http://192.168.0.122:3000/health",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
        }
    })
};

