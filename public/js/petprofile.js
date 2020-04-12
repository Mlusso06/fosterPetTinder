//SideNav Init
$(document).ready(function (data) {
    $('.sidenav').sidenav({
        edge: 'left',
    });


    //Pet Data
    $("#pet-photo-" + i).append("<img src=" + data.pets_data[i].pet_photo + ">");
    $("#pet-name-" + i).append("<h3>" + data.pets_data[i].pet_name + "</h3>");
    $("#pet-gender-" + i).append("<h4>Gender: " + data.pets_data[i].pet_gender + "," + " Age:" + data.pets_data[i].pet_age + "</h4>");
    $("#profile-link-" + i).append("<a href='/api/one" + data.pets_data[1].pet_type + "/" + data.pets_data[i].pet_name + "'>View My Profile</a>");

});


