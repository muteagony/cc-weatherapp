class Header {
    constructor() {
      this.element = document.createElement("section");
      this.element.setAttribute('class', 'header_section');
    }
  
    render() {
      document.querySelector("#root").appendChild(this.element);
      this.element.innerHTML = `
        <img src="" alt="Lupka szukaj">
        <input id="header" placeholder="What's the weather like in: "></input>
      `;
    }
   
}
  
  export default Header;