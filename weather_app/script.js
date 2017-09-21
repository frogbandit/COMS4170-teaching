var KEY = YOUR_KEY_HERE;

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
    e.preventDefault();
    getWeather(document.getElementById('location').value);
}, false);
});