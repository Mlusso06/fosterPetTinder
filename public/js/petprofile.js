//SideNav Init
$(document).ready(function () {
    $('.sidenav').sidenav({
        edge: 'left',
    });
    renderProfile();
});

function renderProfile() {

    $.get("/api/onepet/:name", function (data) {

        //Pet Data
        $("#pet-photo").append("<img src=" + data.pets_data.pet_photo + ">");
        $("#pet-name").append("<h3>" + data.pets_data.pet_name + "</h3>");
        $("#pet-gender").append("<h4>Gender: " + data.pets_data.pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");

    });

};
    //Functionality for Comments






