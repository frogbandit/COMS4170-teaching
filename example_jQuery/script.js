function myFunction() {
    console.log("in myFunction()");
    $('#title').css('color', 'red');
    $("<p>Hello Javascript!</p>" ).appendTo( "body" );
}

$(document).ready(function() {
  myFunction();
});
