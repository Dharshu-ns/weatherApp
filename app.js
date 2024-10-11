const apiKey = "be9d8d1fa7108a7bac7e9feb23aae702";

document.getElementById("weatherBtn").addEventListener("click", function () {
   const city = document.getElementById("weatherInput").value;
   if (city) {
       fetchWeather(city);
   } else {
       alert("Please enter a city name.");
   }
});


async function fetchWeather(city){
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   try{
    const response = await fetch(url);
    const weatherResponse = await response.json();
    console.log(weatherResponse);
    updateWeatherCard(weatherResponse);
   } catch(error){
    throw error;
   }

}   

function updateWeatherCard(data) {
   document.getElementById('weather-condition').innerText = `${data.weather[0].main} (${data.weather[0].description})`;
   document.getElementById('temperature').innerText = data.main.temp;
   document.getElementById('feels-like').innerText = data.main.feels_like;
   document.getElementById('humidity').innerText = data.main.humidity;
   document.getElementById('pressure').innerText = data.main.pressure;
   document.getElementById('wind-speed').innerText = data.wind.speed;
   document.getElementById('wind-gust').innerText = data.wind.gust;
   document.getElementById('rain').innerText = data.rain ? data.rain['1h'] : '0';
   document.getElementById('clouds').innerText = data.clouds.all;
   document.getElementById('visibility').innerText = data.visibility / 1000; 
     document.getElementById('weatherResponse').style.display = 'block';
}

fetchWeather()