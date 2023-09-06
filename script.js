const apiKey = "7b8cbf4c36a54d1d4b4b69a90dc5158a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  console.log(data.main.humidity);
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
