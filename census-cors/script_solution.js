// example API request: https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=4600+Silver+Hill+Rd%2C+Suitland%2C+MD+20746&benchmark=9&format=json

function validateAddress(query){
 $.ajax({
		url: "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?format=jsonp",
		dataType: "jsonp",
    data: {
			 address: query,
			 benchmark: 9,
    },
    success: function(response){
      console.log(response);
     $("#validated-address").text(response.result.addressMatches[0].matchedAddress);
		}
 });
}

$(document).ready(function() {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); //prevent a submit button from submitting a form.
    validateAddress(document.getElementById('address').value);
}, false);
});