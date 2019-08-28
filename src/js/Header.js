class Header {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'header');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div class="header">Header (searcher here) section</div>
      `;
    }
  }
  
  export default Header;