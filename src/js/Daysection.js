class Daysection {
    constructor() {
      this.element = document.createElement("section");
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div class="day">Day section</div>
      `;
    }
  }
  
  export default Daysection;