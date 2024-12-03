const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2bd48b02f4msh80ba12314c06778p1bc9b8jsnfa9a0461a061',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

// Function to fetch weather data
const getWeather = (city) => {
  cityName.innerHTML = city;

  // Correct API URL
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);

      // Update the UI with the data
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
};

// Event listener for the submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Default weather for "Delhi"
getWeather("Delhi");
