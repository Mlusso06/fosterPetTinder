/*Tabs Init*/
$(document).ready(function () {
    $('.tabs').tabs();

<<<<<<< Updated upstream
    $.get("/api/petMatch", function(data){
        console.log(data)
    })
=======

    $.get("/api/allpets", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#pet-photo-" + i).append("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#pet-name-" + i).append("<h3>" + data.pets_data[i].pet_name + "<h2");
            $("#pet-gender-" + i).append("<h4>Gender: " + data.pets_data[i].pet_gender + "</h4>");
            $("#pet-age-" + i).append("<h4>Age: " + data.pets_data[i].pet_age + "</h4>");
            $("#profile-link-" + i).append("<a href='/api/'" + data.pets_data[1].pet_gender + "/:" + data.pets_data[i].pet_name + "</a>");

        }
    });
>>>>>>> Stashed changes
});