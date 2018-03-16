// JavaScript Document

var weatherObject = new XMLHttpRequest();

//weatherObject.open('GET', '//api.wunderground.com/api/10f6c9a228e42d1b/conditions/q/ID/Rexburg.json', true);//

weatherObject.open('GET', '//api.wunderground.com/api/10f6c9a228e42d1b/conditions/q/CA/San_Francisco.json', true);

weatherObject.send();

weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
   
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
}  //end of onload
