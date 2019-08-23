import "@babel/polyfill";
import "../scss/styles.scss";
import Example from "./Example";

const example = new Example();

window.onload = () => {
  example.render();
};
