// JavaScript Document

var requestURL = 'http://api.wunderground.com/api/10f6c9a228e42d1b/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL , true);
request.send();

request.onload = function () {
    
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('place').innerHTML = franklinWeather.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
}  //end of onload


// weather ok
// temperature_string ok
// wind_mph
// icon
// forecast_url
// 