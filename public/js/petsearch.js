/*Tabs Init*/
$(document).ready(function () {
    $('.tabs').tabs();
    renderPets(); //Forces all pets to show by default on page
});


//Functionality for All Available Pets
$("#pets").click(function () {
    renderPets();

});


function renderPets() {
    $.get("/api/allpets", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#pet-photo-" + i).html("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#pet-name-" + i).html("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#pet-gender-" + i).html("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#profile-link-" + i).html("<a href='/api/onepet/" + data.pets_data[i].pet_name + "'>View My Profile</a>'");

        }
    });
};



//Functionality for Available Dog Tab

$("#dogs").click(function () {

    renderDogs();

});

function renderDogs() {
    $.get("/api/alldogs", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#dog-photo-" + i).html("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#dog-name-" + i).html("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#dog-gender-" + i).html("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#dog-profile-link-" + i).html("<a href='/api/onepet/" + data.pets_data[i].pet_name + "'>View My Profile</a>'");

        }
    });
};


//Functionality for Available Cat Tab

$("#cats").click(function () {

    renderCats();

});

function renderCats() {
    $.get("/api/allcats", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#cat-photo-" + i).html("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#cat-name-" + i).html("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#cat-gender-" + i).html("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#cat-profile-link-" + i).html("<a href='/api/onepet/" + data.pets_data[i].pet_name + "'>View My Profile</a>'");

        }
    });
};