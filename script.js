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
}

// Function to fetch the weather data
const getWeather = (city) => {
  cityName.innerHTML = city;

  // API URL with the city and API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // Update the UI with weather data
      temp.innerHTML = data.main.temp;
      feels_like.innerHTML = data.main.feels_like;
      humidity.innerHTML = data.main.humidity;
      min_temp.innerHTML = data.main.temp_min;
      max_temp.innerHTML = data.main.temp_max;
      wind_speed.innerHTML = data.wind.speed;
      wind_degrees.innerHTML = data.wind.deg;
      
      // Convert and display the sunrise and sunset times
      sunrise.innerHTML = convertTime(data.sys.sunrise);
      sunset.innerHTML = convertTime(data.sys.sunset);
    })
    .catch(err => {
      console.error(err);
      alert('City not found or API error. Please try again.');
    });
}

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
