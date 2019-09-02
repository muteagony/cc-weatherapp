import cloud from '../img/cloud.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import storm from '../img/storm.png';
import sun from '../img/sun.png';
import sun_part_cloud from '../img/sun_part_cloud.png';
import getWeekForecast from '../api/api.js';

class Weeksection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'week');
      this._weekNrOfDays = 4;
    }

    findElement(data, dateTemplate) {
      const hourTemplate = '15:00:00';
      dateTemplate = `${dateTemplate[0]}-${dateTemplate[1]}-${dateTemplate[2]}`;
      const correctElement = data.list.find((ele)=>{
          return ele.dt_txt.includes(dateTemplate)&&ele.dt_txt.includes(hourTemplate);
      });
      return correctElement;
    }

    fillImgBox(curDay, correctElement) {
      let weather;
      switch(correctElement.weather[0].icon) {
        case '11d':
          weather = storm;
          break;
        case '09d':
          weather = rain;
          break;
        case '10d':
          weather = rain;
          break;
        case '13d':
          weather = snow;
          break;
        case '09d':
          weather = rain;
          break;
        case '50d':
          weather = cloud;
          break;
        case '01d':
          weather = sun;
          break;
        case '02d':
          weather = sun_part_cloud;
        case '03d':
          weather = cloud;
          break;
        case '04d':
          weather = cloud;
          break;
        default:
          weather = sun;
          break;
      }
      const text = document.querySelector(`.weekDay:nth-child(${curDay}) #weekImg`);
      text.innerHTML = `<img src="${weather}" alt="weather"">`;
    }

    fillTempBox(curDay, correctElement) {
      const temp = Math.round(correctElement.main.temp);
      const text = document.querySelector(`.weekDay:nth-child(${curDay}) #weekTemp`);
      text.innerHTML = `${temp}&#8451`;
    }

    fillDateBox(curDay) {
      const today = new Date();
      const date = new Date();
      date.setDate(today.getDate()+curDay);
      const day = String(date.getDate()).padStart(2,'0');
      const month = String(date.getMonth()+1).padStart(2,'0');
      const year = String(date.getFullYear());
      const text = document.querySelector(`.weekDay:nth-child(${curDay}) #weekDate`);
      text.innerHTML = `${day}.${month}.${year}`;
      return [year,month,day];
    }

    //create boxes
    async render(cityName, coutryCode) {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `<div class="weekMain"></div>`;

      for(let i=0;i<this._weekNrOfDays;i++) {
        const day = document.createElement("div");
        day.setAttribute('class', 'weekDay');
        document.querySelector(".weekMain").appendChild(day);
        for(let j=0;j<3;j++) {
          const category = document.createElement("div");
          category.setAttribute('class', 'weekCategory');
          day.appendChild(category);
          const content = document.createElement("div");
          content.setAttribute('class', 'weekContent');
          switch(j) {
            case 0:
              content.setAttribute('id', 'weekImg');
              break;
            case 1:
              content.setAttribute('id', 'weekTemp');
              break;
            case 2:
              content.setAttribute('id', 'weekDate');
              break;
          }
          category.appendChild(content);
        }
      }
      //get weather data
      const data = await getWeekForecast(cityName, coutryCode);
      let curDate, element;
      //fill boxes
      for(let i=1;i<=this._weekNrOfDays;i++) {
        curDate = this.fillDateBox(i);
        element = this.findElement(data, curDate);
        this.fillImgBox(i, element);
        this.fillTempBox(i, element);       
      }
    }
  }
  
  export default Weeksection;