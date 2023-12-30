const searchBtn = document.getElementById("search_Btn");
const searchInput = document.querySelector(".input");
const placeName = document.querySelector(".placeName");
const weatherImg = document.querySelector(".weatherImg");
const weatherStatus = document.querySelector(".weatherStatus");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const speed = document.querySelector(".speed");
const main = document.querySelector(".main");
const lnf = document.querySelector(".locationNotFound");

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((res) => res.json());

  if (weather_data.cod == "404") {
    main.style.display = "none";
    lnf.style.display = "flex";
    return;
  }

  //   console.log(weather_data);

  lnf.style.display = "none";
  main.style.display = "flex";

  temp.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}C`;
  placeName.innerHTML = `${weather_data.name}`;
  weatherStatus.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "assets/Clouds.jpg";
      break;
    case "Rain":
      weatherImg.src = "assets/rain.jpg";
      break;
    case "Clear":
      weatherImg.src = "assets/sunny.jpg";
      break;
    case "Snow":
      weatherImg.src = "assets/snow.jpg";
      break;
    case "Thunderstorm":
      weatherImg.src = "assets/storm.jpg";
      break;
    case "Rainbow":
      weatherImg.src = "assets/rainbow.jpg";
      break;
    case "Tornado":
      weatherImg.src = "assets/tornado.jpg";
      break;
    case "Fog":
      weatherImg.src = "assets/foggy.jpg";
      break;
    case "Mist":
      weatherImg.src = "assets/foggy.jpg";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  getWeather(city);
});
