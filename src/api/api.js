// api
const getWeekForecast = (cityName, countryCode) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&mode=json&units=metric&appid=57fd87c0d0b6c431824b2b9e4d51610d`)
     .then((res) => res.json())
     .then((res) => res)
     .catch((err) => console.log(err));
}

module.exports = {getWeekForecast};
// api key : 8014f3641b19b22112668e8bb394f5b3
// api endpoint https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=8014f3641b19b22112668e8bb394f5b3
function weatherApi( cityName ) {
    var key = '8014f3641b19b22112668e8bb394f5b3';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {

      console.table(data);
      //api połączone pokazuje wszystkie dane

    })
    .catch(function() {
      // catch any errors
    });
  }
  export default weatherApi;
