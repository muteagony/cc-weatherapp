class Daysection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'day');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div id="day"></div>
      `;
      // creating div, which will hold temperature
      const temp = document.createElement("div");
      document.getElementById('day').appendChild(temp);
      temp.setAttribute('id', 'temp');
      temp.innerHTML = '25°C';
      // creating div, which will hold date
      const date = document.createElement("div");
      document.getElementById('day').appendChild(date);
      date.setAttribute('id', 'date');
      date.innerHTML = '28.08.2019'
      // creating div, which will hold chart
      const chart = document.createElement("div");
      document.getElementById('day').appendChild(chart);
      chart.setAttribute('id', 'chart');
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