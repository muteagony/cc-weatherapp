class Header {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'header_section');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <div id="header">Header (searcher here) section</div>
      `;
    }
  }
  
  export default Header;