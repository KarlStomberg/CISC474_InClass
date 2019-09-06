$(function(){
    
    $('#nameform').on("submit", function( event ){

        console.log("Boo");

        event.preventDefault();

        $('.jumbotron').innerHTML = $('lname').innerHTML + " " + $('fname').innerHTML;
        $('.jumbotron').show();

        return false;

    })

});