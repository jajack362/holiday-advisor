function getWeather(city) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1ef22ce12455e12281610d14bd29bb68', true);

  request.onload = function() {
    const weatherTypes = ["Average Temperature (Celsius): ", "Minimum Temperature (Celsius): ", "Max Temperature (Celsius): ", "Weather: ", "Weather Description: ", "Wind Speed (meter/sec): "];
    const data = JSON.parse(this.response);

    let weatherInfo = "Weather Information for " + city + ":<br>";
    const dataArray = [(data.main.temp - 273.15).toFixed(2), (data.main.temp_min - 273.15).toFixed(2), (data.main.temp_max - 273.15).toFixed(2), data.weather[0].main, data.weather[0].description, data.wind.speed];

    dataArray.forEach((data, i) => weatherInfo += (weatherTypes[i] + data + "<br>"));

    document.getElementById("weather" + city.toLowerCase()).innerHTML = weatherInfo;

  }
  request.send();
}

function submitForm() {
  alert("Message from: " + document.getElementById("firstname").value + " " + document.getElementById("lastname").value + "(" + document.getElementById("emailadress").value + " - " + document.getElementById("country").value + ")\n" + document.getElementById("message").value);
}

const cities = ["London", "Paris", "Miami", "Barcelona", "Zermatt", "Whistler", "Orlando", "Rust"];
cities.forEach(city => getWeather(city));
