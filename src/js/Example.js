class Example {
  constructor() {
    this.element = document.createElement("section");
  }

  render() {
    document.querySelector("#root").appendChild(this.element);
    console.log(2);
    this.element.innerHTML = `
      <div class="example">Przykład jak renderować HTML - usuńcie to</div>
    `;
  }
}

export default Example;
