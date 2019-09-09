// api
const getWeekForecast = (cityName) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&units=metric&appid=57fd87c0d0b6c431824b2b9e4d51610d`)
     .then((res) => res.json())
     .then((res) => res)
     .catch((err) => console.log(err));
}

function log_weather(data){
  console.log(data.name); //nazwa wybranego miasta
  console.log(`${data.main.humidity}% wilgotności`); //wilgotność
  console.log(`${data.wind.speed} m/s`); // Prędkość wiatru
  console.log(`Mamy ${Math.round(parseFloat(data.main.temp)-273.15)} ℃`);  //Celcius - temp
  return data;
}

// api key : 8014f3641b19b22112668e8bb394f5b3
// api endpoint https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=8014f3641b19b22112668e8bb394f5b3
const getTodaysWeather = ( cityName )  => {
    var key = '8014f3641b19b22112668e8bb394f5b3';
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  
      .then((res) => res.json())
      .then((res) => log_weather(res))
      .then((res) => res)
      .catch((err) => console.log(err));
}

module.exports = {getWeekForecast, getTodaysWeather}
