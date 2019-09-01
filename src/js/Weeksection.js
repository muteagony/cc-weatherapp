import url from '../img/cloud.png';

class Weeksection {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'week');
      this._weekNrOfDays = 7;
    }

    fillImgBox(curDay) {
      const text = document.querySelector(`.weekDay:nth-child(${curDay}) #weekImg`);
      let img = document.createElement("img");
      img.src = url;
      text.appendChild(img);
    }

    fillTempBox(curDay) {
      const temp = Math.floor(Math.random()*15)+15;
      let text = document.querySelector(`.weekDay:nth-child(${curDay}) #weekTemp`);
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
    }

    //create boxes
    render() {
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
          let content = document.createElement("div");
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

      //fill boxes
      for(let i=1;i<=this._weekNrOfDays;i++) {
        this.fillImgBox(i);
        this.fillTempBox(i);
        this.fillDateBox(i);
      }
    }
  }
  
  export default Weeksection;