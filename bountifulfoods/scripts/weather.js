const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const describeWeather = document.querySelector('#describeWeather')
const weatherDiv = document.querySelector('#threeday');
const url = 'https://api.openweathermap.org/data/2.5/forecast?appid=72084045ad798dbaa9b1eaa3a54a918a&lat=33.11619316829405&lon=-117.29621423016376&units=imperial';

async function updateWeather() {
    const response = await fetch(url);
    const data = await response.json();
    const forecasts = data.list.slice(0, 3);

    
    forecasts.forEach(forecast => {
        currentTemp.innerHTML = `${forecast.main.temp}&deg;F`;
        describeWeather.innerHTML = `with ${forecast.weather[0].description}`;
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);
        weatherIcon.setAttribute('alt', forecast.weather[0].description);
    });
  
  
  
    for (let i = 1; i <= 3; i++) {
      const forecast = data.list[i * 8];
      weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`);
      weatherIcon.setAttribute('alt', forecast.weather[0].description);
  
      const forecastElement = document.createElement('div');
      forecastElement.classList.add('card')
      forecastElement.innerHTML = `<img src=${`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}></img> <p>${forecast.main.temp}&deg;F - ${forecast.weather[0].description}</p>`;
      weatherDiv.appendChild(forecastElement);
  
    }
  }

  
updateWeather();