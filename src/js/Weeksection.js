class Weeksection {
    constructor() {
      this.element = document.createElement("section");
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div class="week">Week section</div>
      `;
    }
  }
  
  export default Weeksection;