let searchBtn = document.querySelector("#searchBtn");

let inputBox = document.querySelector("#input-box");

let search_box = document.querySelector(".search-box");

let location_not_found = document.querySelector(".location-not-found");

let weather_img = document.querySelector(".weather-img");

let temperature = document.querySelector(".temperature");

let description = document.querySelector(".description");

let humidity = document.querySelector("#humidity");

let wind_speed = document.querySelector("#wind-speed");
const weather_body = document.querySelector(".weather-body")

async function checkWeather(city) {
  const api_key = "bd5e378503939ddaee76f12ad7a97608";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  //   const weather_data = await fetch(`${url}`).then(response => response.json());

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    return;
  }
  location_not_found.style.display = "none";

  weather_body.style.display = "flex";


  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "./assets/assets/img/cloud.png";
      break;

    case "Clear":
      weather_img.src = "./assets/assets/img/clear.png";
      break;

    case "Rain":
      weather_img.src = "./assets/assets/img/rain.png";
      break;

    case "Mist":
      weather_img.src = "./assets/assets/img/mist.png";
      break;

    case "Snow":
      weather_img.src = "./assets/assets/img/snow.png";
      break;
  }

   console.log(weather_data)
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
