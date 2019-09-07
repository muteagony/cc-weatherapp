// api
const getWeekForecast = (cityName, countryCode) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&mode=json&units=metric&appid=57fd87c0d0b6c431824b2b9e4d51610d`)
     .then((res) => res.json())
     .then((res) => res)
     .catch((err) => console.log(err));
}

module.exports = {getWeekForecast};