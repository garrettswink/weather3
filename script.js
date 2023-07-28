// Input + Button
const button = document.querySelector('#button');
const input = document.querySelector('#user-input');

// Today's Weather Div Components
const weatherDisplay = document.querySelector('#today-display');
const tempToday = document.querySelector('#temperature');
const cityName = document.querySelector('#city-name');
const weather = document.querySelector('#weather');

// API Key for Current Weather
const bostonAPI = 'https://api.openweathermap.org/data/2.5/weather?q=boston&appid=b6aea4e52454a7d075b11a3ac6da7ea1&units=imperial';

// Current Weather Function
function currentWeather() {
  fetch(bostonAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.main.temp);
      const icon = document.createElement('img');
      cityName.innerHTML = data.name;
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      icon.style.height = '100px';
      icon.style.width = '100px';
      weatherDisplay.appendChild(icon);
      tempToday.innerHTML = data.main.temp;
      weather.innerHTML = data.weather[0].description;
    });
}

currentWeather();

button.addEventListener('click', function () {
  weatherDisplay.innerHTML = '';
  tempToday.innerHTML = '';
  cityName.innerHTML = '';
  weather.innerHTML = '';

  let cityInput = input.value;
  const cityRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=b6aea4e52454a7d075b11a3ac6da7ea1`;

  fetch(cityRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cityName.innerHTML = data.name;
      tempToday.innerHTML = data.main.temp;
      weather.innerHTML = data.weather[0].description;
      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      icon.style.height = '100px';
      icon.style.width = '100px';
      weatherDisplay.appendChild(icon);
    });
});


  