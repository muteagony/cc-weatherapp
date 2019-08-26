import "@babel/polyfill";
import "../scss/styles.scss";
/* import Example from "./Example"; */
import Daysection from "./Daysection";
import Weeksection from "./Weeksection";
import Header from "./Header";

/* const example = new Example(); */
const daysection = new Daysection();
const weeksection = new Weeksection();
const header = new Header();

window.onload = () => {
/*   example.render(); */
  header.render();
  daysection.render();
  weeksection.render();
};
