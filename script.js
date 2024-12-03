// The API key for OpenWeatherMap. Make sure to replace this with your actual API key
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API Key

// Get the HTML elements
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const cityInput = document.getElementById("city");
const submit = document.getElementById("submit");

// Function to convert the Unix timestamp to a human-readable time
const convertTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};

// Function to fetch the weather data
const getWeather = (city) => {
  cityName.textContent = city; // Use textContent instead of innerHTML for security

  // API URL with the city and API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // Update the UI with weather data
      temp.textContent = `${data.main.temp} °C`;
      feels_like.textContent = `${data.main.feels_like} °C`;
      humidity.textContent = `${data.main.humidity} %`;
      min_temp.textContent = `${data.main.temp_min} °C`;
      max_temp.textContent = `${data.main.temp_max} °C`;
      wind_speed.textContent = `${data.wind.speed} m/s`;
      wind_degrees.textContent = `${data.wind.deg}°`;
      
      // Convert and display the sunrise and sunset times
      sunrise.textContent = convertTime(data.sys.sunrise);
      sunset.textContent = convertTime(data.sys.sunset);
    })
    .catch((err) => {
      console.error(err);
      alert('City not found or API error. Please try again.');
    });
};

// Event listener for the submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Default weather data for a city (for example, "Delhi")
getWeather("Delhi");
