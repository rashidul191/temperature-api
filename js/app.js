const API_KEY = `151eaa1e15b5c8e019742491347380ec`;

const searchTemperature = () => {
  // console.log("search btn click done")

  const searchCity = document.getElementById("search-city-name").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

  //console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

// set result texts
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// display temperature
const displayTemperature = (temperature) => {
 console.log(temperature);

  setInnerText("city-name", temperature.name);
  setInnerText("temperature-text", temperature.main.temp);
  setInnerText("temp-condition", temperature.weather[0].main)

//   for (const weather of temperature.weather) {
//     console.log(weather.main);

//     setInnerText("temp-condition", weather.main)
//   }


// set weather icon
const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

const imgIcon = document.getElementById("weather-icon");
imgIcon.setAttribute("src",url);

};
