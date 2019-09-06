console.log("index.js loaded");

$(function(){

    console.log("index.js jquery loaded");
    
    $('#nameform').on("submit", function( event ){

        event.preventDefault();

        $('.jumbotron').html("<h1>" + $('#lname').val() + " " + $('#fname').val() + "</h1>");
        $('.jumbotron').removeClass("d-none");

        return false;

    })

});