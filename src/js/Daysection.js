class Daysection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'day_section');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div id="day">
          <div id="icon">
            <img src='../img/cloud.png'>
          </div>
          <div id="temp">25°C</div>
          <div id="date">28.08.2019</div>
          <div id="chart">
            <canvas id="tempchart"></canvas>
          </div>
          <div id="rain">13%</div>
          <div id="wind">20 m/s</div>
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