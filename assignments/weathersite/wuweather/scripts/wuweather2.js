// JavaScript Document

var requestURL = 'http://api.wunderground.com/api/10f6c9a228e42d1b/conditions/q/ID/Rexburg.json';

'http://api.wunderground.com/api/10f6c9a228e42d1b/forecast/q/MN/Franklin.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL , true);
request.send();

request.onload = function () {
    
    var franklinWeather = JSON.parse(request.responseText);
    //lugar
    document.getElementById('place').innerHTML = franklinWeather.current_observation.display_location.full;
    
    //icono
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    
    //weather string
    document.getElementById('wstring').innerHTML = franklinWeather.current_observation.weather;
    
    //temperatura actual
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    
    
    //velocidad del aire
    document.getElementById('windspeed').innerHTML = franklinWeather.current_observation.wind_mph;
    
    //pronóstico del período
   document.getElementById('forecast').innerHTML = franklinWeather.forecastday.period;
    
}  //end of onload
