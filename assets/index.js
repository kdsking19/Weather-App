async function getWeather() {
    const apiKey = '0a76b8c9056eaef6f5c9d411e2ac536c';
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherInfo').innerHTML = "<p>City not found</p>";
        } else {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].main}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}
