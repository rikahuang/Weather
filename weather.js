var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function getWeatherInfo() {
    fetch("https://wttr.in/Toronto?format=j1")
    .then(function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        console.log(data.current_condition);
        showWeatherInfo(data);
        hideLoader();
    })

}

window.addEventListener("load", function(){
    getWeatherInfo();
    showDate();
})

function showWeatherInfo(info) {
    var currentCondition = info.current_condition[0];

    var tempNow = document.getElementById("tempNow");
    tempNow.innerHTML = currentCondition.temp_C;

    var fl = document.getElementById("FL");
    fl.innerHTML = currentCondition.FeelsLikeC;

    var con = document.getElementById("condition");
    con.innerHTML = currentCondition.weatherDesc[0].value;

    var hum = document.getElementById("humidity");
    hum.innerHTML = currentCondition.humidity + "%";

    var ws = document.getElementById("windSpeed");
    ws.innerHTML = currentCondition.windspeedKmph + "km/h"

    var vis = document.getElementById("visibility");
    vis.innerHTML = currentCondition.visibility + "km";

    var wtr = info.weather[0];

    var low = document.getElementById("lowTemp");
    var high = document.getElementById("highTemp");
    low.innerHTML = wtr.mintempC;
    high.innerHTML = wtr.maxtempC;
    
    var sunR = document.getElementById("sunRise");
    sunR.innerHTML = wtr.astronomy[0].sunrise;
    var sunS = document.getElementById("sunSet");
    sunS.innerHTML = wtr.astronomy[0].sunset;

   var morning6 = document.getElementById("am1");
   morning6.innerHTML = wtr.hourly[2].tempC + "°C";

   var morning12 = document.getElementById("am2");
   morning12.innerHTML = wtr.hourly[4].tempC + "°C";

   var evening6 = document.getElementById("pm1");
   evening6.innerHTML = wtr.hourly[6].tempC + "°C";

   var evening9 = document.getElementById("pm2");
   evening9.innerHTML = wtr.hourly[7].tempC + "°C";
}

function showDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1 ;
    var year = today.getFullYear();
    var wkDay = weekday[today.getDay()];

    var date = document.getElementById("date");
    date.innerHTML = wkDay + ", " + month + "/" + day + "/" + year;
}

function hideLoader() {
    var loader = document.getElementById("load");
    loader.classList.add("hide");
    var weather = document.getElementById("weatherApp");
    weather.classList.remove("hide");
}