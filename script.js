const apiKey = "7b8cbf4c36a54d1d4b4b69a90dc5158a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=italy";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.name;
}

checkWeather();
