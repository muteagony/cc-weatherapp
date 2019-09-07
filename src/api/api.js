// api key : 8014f3641b19b22112668e8bb394f5b3
// api endpoint https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=8014f3641b19b22112668e8bb394f5b3
function weatherApi( cityName ) {
    var key = '8014f3641b19b22112668e8bb394f5b3';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {

      console.log(data.name); //nazwa wybranego miasta
      console.log(`${data.main.humidity}% wilgotności`); //wilgotność
      console.log(`${data.wind.speed} m/s`); // Prędkość wiatru
      console.log(`Mamy ${Math.round(parseFloat(data.main.temp)-273.15)} ℃`);  //Celcius - temp
      //api połączone pokazuje wszystkie dane

    })
    .catch(function() {
      // catch any errors
    });
  }
  export default weatherApi;