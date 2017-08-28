$(document).ready(function() {
    console.log("I'm ready!");

    $('#container').click(function(){

	console.log("here we go");
	

	/*
	  $.ajax({
	  method: "POST",
	  url: "/",
	  data: { name: "John", location: "Boston" }
	  })
	  .done(function( msg ) {
	  alert( "Data Saved: " + msg );
	  });
	*/

	$.get( "/loser", function( data ) {
	    $( "#container" ).html( data );
	    console.log( data );
	});
	
    });


});




