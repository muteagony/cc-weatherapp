import api from "../api/api.js";
import findWeather from '../static/iconMap.js';

class Daysection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'day_section');
      
       
    }
  
    async render(city) {
      const data = await api.getTodaysWeather(city);
      console.log(data);
      
      const weatherData = {
        'name': data.name,
        'rain': data.main.humidity,
        'wind': data.wind.speed,
        'temp': Math.round(parseFloat(data.main.temp)-273.15),
        'icon': findWeather(data.weather[0].icon)
      }
      var today = new Date().toJSON().slice(0,10);

      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div id="day">
          <div id="icon">
            <img src=${weatherData.icon}>
          </div>
          <div id="temp">${weatherData.temp} °C</div>
          <div id="date">${today}</div>
          <div id="chart">
            <canvas id="tempchart"></canvas>
          </div>
          <div id="rain">${weatherData.rain}%</div>
          <div id="wind">${weatherData.wind} m/s</div>
        </div>
      `;
      //creating a chart
      Chart.defaults.global.defaultFontColor = 'black';
      const ctx = document.getElementById('tempchart').getContext('2d');
      const tempchart = new Chart(ctx, {
        type: 'line',
        // The data for our dataset, we're gonna change when API will be done
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          datasets: [{
            backgroundColor: 'transparent',
            borderColor: 'black',
            pointBackgroundColor: 'black',
            data: [20, 23, 25, 10, -9, 0, 19],
          }]
        },
        // Configuration options
        options: {
          maintainAspectRatio: false,
          legend:{
            display: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                  color: "black",
              }
          }],
            yAxes: [{
              gridLines: {
                color: "black",
              },
              scaleLabel: {
                display: true,
                labelString: 'T[°C]',
              }
            }]
          }
        }
      });
    }
  }
  
  export default Daysection;