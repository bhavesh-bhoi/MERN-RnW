const API_KEY = "5d73a99ff554352719be2118aab73699";

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const iconEl = document.getElementById("icon");
const errorEl = document.getElementById("error");

// GET Device Location
function getDeviceLocation() {
  if (!navigator.geolocation) {
    errorEl.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    },
    (error) => {
      errorEl.textContent = "Location permission denied.";
      console.error(error);
    }
  );
}

// Get Weather Data Using OpenWeatherMapAPI
async function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    errorEl.textContent = "Unable to load weather data.";
    console.error(error);
  }
}

// Render Weather Data From API
function renderWeather(data) {
  const forecast = data.list[0];

  cityEl.textContent = `${data.city.name}, ${data.city.country}`;
  tempEl.textContent = `${Math.round(forecast.main.temp)}°C`;
  conditionEl.textContent = forecast.weather[0].description;

  humidityEl.textContent = `${forecast.main.humidity}%`;
  windEl.textContent = `${forecast.wind.speed} m/s`;

  const iconCode = forecast.weather[0].icon;
  iconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconEl.alt = forecast.weather[0].description;
}

// Get Location First
getDeviceLocation();
