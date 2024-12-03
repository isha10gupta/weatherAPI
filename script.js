const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2bd48b02f4msh80ba12314c06778p1bc9b8jsnfa9a0461a061',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      // Safely update the UI with response properties
      temp.innerHTML = response.temp ?? 'N/A';
      feels_like.innerHTML = response.feels_like ?? 'N/A';
      humidity.innerHTML = response.humidity ?? 'N/A';
      min_temp.innerHTML = response.min_temp ?? 'N/A';
      max_temp.innerHTML = response.max_temp ?? 'N/A';
      wind_speed.innerHTML = response.wind_speed ?? 'N/A';
      wind_degrees.innerHTML = response.wind_degrees ?? 'N/A';
      sunrise.innerHTML = response.sunrise ? new Date(response.sunrise * 1000).toLocaleTimeString() : 'N/A';
      sunset.innerHTML = response.sunset ? new Date(response.sunset * 1000).toLocaleTimeString() : 'N/A';
    })
    .catch(err => {
      console.error(err);
      alert('Failed to fetch weather data. Please check your input or try again later.');
    });
};

// Event listener for the submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = city.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Default weather data for a city
getWeather("Delhi");
