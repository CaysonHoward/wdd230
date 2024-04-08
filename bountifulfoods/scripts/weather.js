const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const describeWeather = document.querySelector('#describeWeather')
const weatherDiv = document.querySelector('#threeday');
const url = 'https://api.openweathermap.org/data/2.5/forecast?appid=72084045ad798dbaa9b1eaa3a54a918a&lat=33.11619316829405&lon=-117.29621423016376&units=imperial';
const currDate = new Date();
const currDay = currDate.getDay();

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    const forecasts = data.list.slice(0, 3);

    
    forecasts.forEach(forecast => {
        currentTemp.innerHTML = `${forecast.main.temp}&deg;F`;
        describeWeather.innerHTML = `with ${forecast.weather[0].description}`;
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let desc = forecast.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    });
  
  
  
    for (let i = 1; i <= 3; i++) {
      const forecast = data.list[i * 8];
      const forecastTemp = forecast.main.temp;
      const forecastDesc = forecast.weather[0].description;
      const iconfsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      let descf = forecast.weather[0].description;
      weatherIcon.setAttribute('src', iconfsrc);
      weatherIcon.setAttribute('alt', descf);
  
      // Update HTML for each forecast
      const forecastElement = document.createElement('div');
      forecastElement.classList.add('weatherCard')
      forecastElement.innerHTML = `<img src=${iconfsrc}></img> <p>${forecastTemp}&deg;F - ${forecastDesc}</p>`;
      weatherDiv.appendChild(forecastElement);
  
    }
  }
}

  
apiFetch();