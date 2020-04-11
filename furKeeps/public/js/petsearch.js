/*Tabs Init*/
$(document).ready(function () {
    $('.tabs').tabs();

    $.get("/api/petMatch", function(data){
        console.log(data)
    })
});