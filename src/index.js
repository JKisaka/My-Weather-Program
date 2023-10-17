const apiKey = 'd46e055e81b589f8e09dbd88e4835038';
const weatherData = document.getElementById('weatherData');
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
                const description = data.weather[0].description;
                weatherData.innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Conditions: ${description}</p>
                `;
            })
            .catch((error) => {
                weatherData.innerHTML = '<p>City not found. Please try again.</p>';
            });
    } else {
        weatherData.innerHTML = '<p>Please enter a city name.</p>';
    }
});