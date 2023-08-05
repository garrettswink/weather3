// 🔥🔥🔥 Input + Button 🔥🔥🔥
const button = document.querySelector('#button');
const input = document.querySelector('#user-input');

// 🔥🔥🔥 Today's Weather Div Components 🔥🔥🔥
const weatherDisplay = document.querySelector('#today-display');
const tempToday = document.querySelector('#temperature');
const cityName = document.querySelector('#city-name');
const weather = document.querySelector('#weather');

// 🔥🔥🔥 Card Components 🔥🔥🔥
const mondayCard = document.querySelector('#monday-card');
const date1 = document.querySelector('#date-1');
const weather1 = document.querySelector('#weather-1');
const temp1 = document.querySelector('#temp-1');

const tuesdayCard = document.querySelector('#tuesday-card');
const date2 = document.querySelector('#date-2');
const weather2 = document.querySelector('#weather-2');
const temp2 = document.querySelector('#temp-2');

const wednesdayCard = document.querySelector('#wednesday-card');
const date3 = document.querySelector('#date-3');
const weather3 = document.querySelector('#weather-3');
const temp3 = document.querySelector('#temp-3');

const thursdayCard = document.querySelector('#thursday-card');
const date4 = document.querySelector('#date-4');
const weather4 = document.querySelector('#weather-4');
const temp4 = document.querySelector('#temp-4');

const fridayCard = document.querySelector('#friday-card');
const date5 = document.querySelector('#date-5');
const weather5 = document.querySelector('#weather-5');
const temp5 = document.querySelector('#temp-5');

// History Div
const historyDiv = document.querySelector('#history-display');

// 🔥🔥🔥 API Key for Current Weather + 5 Day 🔥🔥🔥
const bostonAPI = 'https://api.openweathermap.org/data/2.5/weather?q=boston&appid=b6aea4e52454a7d075b11a3ac6da7ea1&units=imperial';
const bostonAPI5 = 'https://api.openweathermap.org/data/2.5/forecast?q=boston&appid=b6aea4e52454a7d075b11a3ac6da7ea1&units=imperial';

// 🔥🔥🔥Default Boston Weather 🔥🔥🔥
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

// 🔥🔥🔥Default Boston Five Day Forecast🔥🔥🔥
function forecast() {
  fetch(bostonAPI5)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)

      date1.innerHTML = data.list[0].dt_txt
      weather1.innerHTML = data.list[0].weather[0].description;
      temp1.innerHTML = data.list[0].main.temp;

      date2.innerHTML = data.list[1].dt_txt
      weather2.innerHTML = data.list[1].weather[0].description;
      temp2.innerHTML = data.list[1].main.temp;


      date3.innerHTML = data.list[2].dt_txt
      weather3.innerHTML = data.list[2].weather[0].description;
      temp3.innerHTML = data.list[2].main.temp;

      date4.innerHTML = data.list[3].dt_txt
      weather4.innerHTML = data.list[3].weather[0].description;
      temp4.innerHTML = data.list[3].main.temp;

      date5.innerHTML = data.list[4].dt_txt
      weather5.innerHTML = data.list[4].weather[0].description;
      temp5.innerHTML = data.list[4].main.temp;

      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
      icon.style.height = '100px'
      icon.style.width = '100px'
      mondayCard.appendChild(icon);

      const icon2 = document.createElement('img');
      icon2.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon2.style.height = '100px'
      icon2.style.width = '100px'
      tuesdayCard.appendChild(icon2);

      const icon3 = document.createElement('img');
      icon3.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon3.style.height = '100px'
      icon3.style.width = '100px'
      wednesdayCard.appendChild(icon3);

      const icon4 = document.createElement('img');
      icon4.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon4.style.height = '100px'
      icon4.style.width = '100px'
      thursdayCard.appendChild(icon4);

      const icon5 = document.createElement('img');
      icon5.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon5.style.height = '100px'
      icon5.style.width = '100px'
      fridayCard.appendChild(icon5);

    }
    )
};

forecast();

// 🔥🔥🔥 City Search => Current Weather 🔥🔥🔥
button.addEventListener('click', function () {

// Clear diplayed data
  tempToday.innerHTML = '';
  cityName.innerHTML = '';
  weather.innerHTML = '';

  const previousIcon = weatherDisplay.querySelector('img');
  if (previousIcon) {
    previousIcon.remove();
  }

// Input + API Variables
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

// 🔥🔥🔥City Search => 5 Day Forecast🔥🔥🔥

button.addEventListener('click', function () {

//Clear previous data
  date1.innerHTML = '';
  weather1.innerHTML = '';
  temp1.innerHTML = '';

  date2.innerHTML = '';
  weather2.innerHTML = '';
  temp2.innerHTML = '';

  date3.innerHTML = '';
  weather3.innerHTML = '';
  temp3.innerHTML = '';

  date4.innerHTML = '';
  weather4.innerHTML = '';
  temp4.innerHTML = '';

  date5.innerHTML = '';
  weather5.innerHTML = '';
  temp5.innerHTML = '';

  const previousIcon = mondayCard.querySelector('img');
  if (previousIcon) {
    previousIcon.remove();
  }

  const previousIcon2 = tuesdayCard.querySelector('img');
  if (previousIcon2) {
    previousIcon2.remove();
  }

  const previousIcon3 = wednesdayCard.querySelector('img');
  if (previousIcon3) {
    previousIcon3.remove();
  }

  const previousIcon4 = thursdayCard.querySelector('img');
  if (previousIcon4) {
    previousIcon4.remove();
  }

  const previousIcon5 = fridayCard.querySelector('img');
  if (previousIcon5) {
    previousIcon5.remove();
  }

// Fetch + Display
  let forecastInput = input.value;
  const forecastRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${forecastInput}&units=imperial&appid=b6aea4e52454a7d075b11a3ac6da7ea1`;

  fetch(forecastRequest)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      date1.innerHTML = data.list[0].dt_txt;
      weather1.innerHTML = data.list[0].weather[0].description;
      temp1.innerHTML = data.list[0].main.temp;
      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
      icon.style.height = '100px'
      icon.style.width = '100px'
      mondayCard.appendChild(icon);

      date2.innerHTML = data.list[1].dt_txt;
      weather2.innerHTML = data.list[1].weather[0].description;
      temp2.innerHTML = data.list[1].main.temp;
      const icon2 = document.createElement('img');
      icon2.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon2.style.height = '100px'
      icon2.style.width = '100px'
      tuesdayCard.appendChild(icon2);

      date3.innerHTML = data.list[2].dt_txt;
      weather3.innerHTML = data.list[2].weather[0].description;
      temp3.innerHTML = data.list[2].main.temp;
      const icon3 = document.createElement('img');
      icon3.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon3.style.height = '100px'
      icon3.style.width = '100px'
      wednesdayCard.appendChild(icon3);

      date4.innerHTML = data.list[3].dt_txt;
      weather4.innerHTML = data.list[3].weather[0].description;
      temp4.innerHTML = data.list[3].main.temp;
      const icon4 = document.createElement('img');
      icon4.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon4.style.height = '100px'
      icon4.style.width = '100px'
      thursdayCard.appendChild(icon4);

      date5.innerHTML = data.list[4].dt_txt;
      weather5.innerHTML = data.list[4].weather[0].description;
      temp5.innerHTML = data.list[4].main.temp;
      const icon5 = document.createElement('img');
      icon5.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon5.style.height = '100px'
      icon5.style.width = '100px'
      fridayCard.appendChild(icon5);

    });
});



// 🔥🔥🔥 Search History 🔥🔥🔥

button.addEventListener('click', function () {
  const historyButton = document.createElement('button');
  const historyInput = document.querySelector('#user-input');


// Button Generation
  historyButton.innerHTML = input.value;
  historyDiv.appendChild(historyButton);
  historyButton.style.margin = '10px';
  historyButton.style.fontSize = '100px';

  historyButton.addEventListener('click', function () {

// Clear Current Weather Display Data
  tempToday.innerHTML = '';
  cityName.innerHTML = '';
  weather.innerHTML = '';

  const previousIcon = weatherDisplay.querySelector('img');
  if (previousIcon) {
    previousIcon.remove();
  }

  date1.innerHTML = '';
  weather1.innerHTML = '';
  temp1.innerHTML = '';

  date2.innerHTML = '';
  weather2.innerHTML = '';
  temp2.innerHTML = '';

  date3.innerHTML = '';
  weather3.innerHTML = '';
  temp3.innerHTML = '';

  date4.innerHTML = '';
  weather4.innerHTML = '';
  temp4.innerHTML = '';

  date5.innerHTML = '';
  weather5.innerHTML = '';
  temp5.innerHTML = '';

  const currentIcon = mondayCard.querySelector('img'); 
  if (currentIcon) {
    currentIcon.remove();
  }

  const currentIcon2 = tuesdayCard.querySelector('img');
  if (currentIcon2) {
    currentIcon2.remove();
  }

  const currentIcon3 = wednesdayCard.querySelector('img');
  if (currentIcon3) {
    currentIcon3.remove();
  }

  const currentIcon4 = thursdayCard.querySelector('img');
  if (currentIcon4) {
    currentIcon4.remove();
  }

  const currentIcon5 = fridayCard.querySelector('img');
  if (currentIcon5) {
    currentIcon5.remove();
  }

//Input + API Variables
   let historyInput = historyButton.innerHTML;
    const historyRequest = `https://api.openweathermap.org/data/2.5/weather?q=${historyInput}&units=imperial&appid=b6aea4e52454a7d075b11a3ac6da7ea1`;

// Fetch + Diaplay Current Weather
   fetch(historyRequest)
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

    const forecastHistoryRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${historyInput}&units=imperial&appid=b6aea4e52454a7d075b11a3ac6da7ea1`;

    fetch(forecastHistoryRequest)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      date1.innerHTML = data.list[0].dt_txt;
      weather1.innerHTML = data.list[0].weather[0].description;
      temp1.innerHTML = data.list[0].main.temp;
      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
      icon.style.height = '100px'
      icon.style.width = '100px'
      mondayCard.appendChild(icon);

      date2.innerHTML = data.list[1].dt_txt;
      weather2.innerHTML = data.list[1].weather[0].description;
      temp2.innerHTML = data.list[1].main.temp;
      const icon2 = document.createElement('img');
      icon2.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon2.style.height = '100px'
      icon2.style.width = '100px'
      tuesdayCard.appendChild(icon2);

      date3.innerHTML = data.list[2].dt_txt;
      weather3.innerHTML = data.list[2].weather[0].description;
      temp3.innerHTML = data.list[2].main.temp;
      const icon3 = document.createElement('img');
      icon3.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon3.style.height = '100px'
      icon3.style.width = '100px'
      wednesdayCard.appendChild(icon3);

      date4.innerHTML = data.list[3].dt_txt;
      weather4.innerHTML = data.list[3].weather[0].description;
      temp4.innerHTML = data.list[3].main.temp;
      const icon4 = document.createElement('img');
      icon4.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon4.style.height = '100px'
      icon4.style.width = '100px'
      thursdayCard.appendChild(icon4);

      date5.innerHTML = data.list[4].dt_txt;
      weather5.innerHTML = data.list[4].weather[0].description;
      temp5.innerHTML = data.list[4].main.temp;
      const icon5 = document.createElement('img');
      icon5.src = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
      icon5.style.height = '100px'
      icon5.style.width = '100px'
      fridayCard.appendChild(icon5);

    });

});


});







