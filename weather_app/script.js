var KEY = '2d8efa108604f8e2a283721e34807f34';

function getWeather(query){
 $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
       q: query,
       appid: KEY
    },
    success: function(response){
     $("#weather").text(response.weather[0].main);
    }
 });
}

$(document).ready(function() {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); //prevent a submit button from submitting a form.
    getWeather(document.getElementById('location').value);
}, false);
});