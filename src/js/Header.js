class Header {
    constructor() {
      this.element = document.createElement("section");
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div class="header">Header (searcher here) section</div>
      `;
    }
  }
  
  export default Header;