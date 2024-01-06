async function searchWeather() {
    const locationInput = document.getElementById('locationInput');
    const cityName = locationInput.value.trim();

    if (!cityName) {
        alert('Please enter a valid city name.');
        return;
    }

    // Show loading state
    document.getElementById('weatherCard').style.display = 'none';
    document.getElementById('hero').style.backgroundImage = "url('path/to/loading-image.gif')";

    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=843155317cbdb9b717d5680b629564e3`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const temperature = Math.round(data.main.temp - 273.15) + "&deg;" + 'C';
        const condition = data.weather[0].description;
        document.getElementById('temperature').innerHTML = 'Temperature: ' + temperature;
        document.getElementById('condition').innerHTML = 'Condition: ' + condition;
        document.getElementById('weatherCard').style.display = 'block';
        document.getElementById('hero').style.backgroundImage = "url('path/to/your-background-image.jpg')";
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching data. Please try again.');
        // Reset background image on error
        document.getElementById('hero').style.backgroundImage = "url('path/to/your-background-image.jpg')";
    }
}
