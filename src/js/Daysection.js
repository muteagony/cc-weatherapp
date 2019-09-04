class Daysection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'day_section');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div id="day"></div>
      `;
      // creating div, which will hold icon
      const icon = document.createElement("div");
      document.getElementById('day').appendChild(icon);
      icon.setAttribute('id', 'icon');
      icon.innerHTML = `
      <img src='../img/cloud.png'>
      `;
      // creating div, which will hold temperature
      const temp = document.createElement("div");
      document.getElementById('day').appendChild(temp);
      temp.setAttribute('id', 'temp');
      temp.innerText = '25°C';
      // creating div, which will hold date
      const date = document.createElement("div");
      document.getElementById('day').appendChild(date);
      date.setAttribute('id', 'date');
      date.innerHTML = '28.08.2019'
      // creating div, which will hold chart
      const chart = document.createElement("div");
      document.getElementById('day').appendChild(chart);
      chart.setAttribute('id', 'chart');
      const tempChart = document.createElement("canvas");
      document.getElementById('chart').appendChild(tempChart);
      tempChart.setAttribute('id', 'tempchart');
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

      // creating div, which will hold precipitation probability
      const rain = document.createElement("div");
      document.getElementById('day').appendChild(rain);
      rain.setAttribute('id', 'rain');
      rain.innerHTML = '13%'
      // creating div, which will hold wind
      const wind = document.createElement("div");
      document.getElementById('day').appendChild(wind);
      wind.setAttribute('id', 'wind');
      wind.innerHTML = '20 m/s'
    }
  }
  
  export default Daysection;