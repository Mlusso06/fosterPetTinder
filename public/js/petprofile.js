//SideNav Init
$(document).ready(function () {
    $('.sidenav').sidenav({
        edge: 'left',
    });

    renderPet();


    function renderPet() {
        $.get("/api/onepet" + name, function (data) {
            if (data) {
                $("#pet-photo").html("<img src=" + data.pets_data.pet_photo + ">");
                $("#pet-name").html("<h3>" + data.pets_data.pet_name + "</h3>");
                $("#pet-gender").html("<h4>Gender: " + data.pets_data.pet_gender + "</h4>");
                $("#pet-age").html("<h4>Age: " + data.pets_data.pet_age + "</h4>");
                $("#kid-friendly").html("<h4>Kid Friendly?: " + data.pets_data.kid_friendly + "</h4>");
                $("#animal-friendly").html("<h4>Animal Friendly?: " + data.pets_data.animal_friendly + "</h4>");
            }
        });
    }

});

/*function renderProfile() {

    $.get("/api/onepet/:name", function (data) {



        //Pet Data
        $("#pet-photo").html("<img src=" + data.pets_data.pet_photo + ">");
        $("#pet-name").html("<h3>" + data.pets_data.pet_name + "</h3>");
        $("#pet-gender").html("<h4>Gender: " + data.pets_data.pet_gender + "</h4>");
        $("#pet-age").html("<h4>Age: " + data.pets_data.pet_age + "</h4>");
        $("#kid-friendly").html("<h4>Kid Friendly?: " + data.pets_data.kid_friendly + "</h4>");
        $("#animal-friendly").html("<h4>Animal Friendly?: " + data.pets_data.animal_friendly + "</h4>");

    });

};
    //Functionality for Comments*/






