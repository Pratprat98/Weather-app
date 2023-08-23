console.log("js working");

async function searchWeather(){
    const city_name = document.getElementById('locationInput').value;
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=843155317cbdb9b717d5680b629564e3`  
    const response = await fetch(apiUrl);
    const data = await response.json();
    const temperature = Math.round(data.main.temp - 273.15) +"&deg;" + 'C';
    const condition = data.weather[0].description;
    document.getElementById('temperature').innerHTML = 'Temperature: ' + temperature;
    document.getElementById('condition').innerHTML = 'Condition: ' + condition;
}