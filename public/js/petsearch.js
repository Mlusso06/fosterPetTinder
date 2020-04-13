/*Tabs Init*/
$(document).ready(function () {
    $('.tabs').tabs();
    renderPets(); //Forces all pets to show by default on page
});


//Functionality for All Available Pets
$("#pets").click(function () {
    renderPets();
    $("#allPets").load("/petsearch.html #allPets");
});


function renderPets() {
    $.get("/api/allpets", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#pet-photo-" + i).append("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#pet-name-" + i).append("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#pet-gender-" + i).append("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#profile-link-" + i).append("<a href='/petprofile/" + data.pets_data[i].pet_name + "'>View My Profile</a>'");

        }
    });
};



//Functionality for Available Dog Tab

$("#dogs").click(function () {

    renderDogs();
    $("#allDogs").load("/petsearch.html #allDogs");
});

function renderDogs() {
    $.get("/api/alldogs", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#dog-photo-" + i).append("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#dog-name-" + i).append("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#dog-gender-" + i).append("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#dog-profile-link-" + i).append("<a href='/api/one" + data.pets_data[1].pet_type + "/" + data.pets_data[i].pet_name + "'>View My Profile</a>");

        }
    });
};


//Functionality for Available Cat Tab

$("#cats").click(function () {

    renderCats();
    $("#allCats").load("/petsearch.html #allCats");
});

function renderCats() {
    $.get("/api/allcats", function (data) {
        for (var i = 0; i < data.pets_data.length; i++) {

            //Pet Data
            $("#cat-photo-" + i).append("<img src=" + data.pets_data[i].pet_photo + ">");
            $("#cat-name-" + i).append("<h3>" + data.pets_data[i].pet_name + "</h3>");
            $("#cat-gender-" + i).append("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
            $("#cat-profile-link-" + i).append("<a href='/api/one" + data.pets_data[1].pet_type + "/" + data.pets_data[i].pet_name + "'>View My Profile</a>");

        }
    });
};