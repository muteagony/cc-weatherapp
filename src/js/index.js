import "@babel/polyfill";
import "../scss/styles.scss";
import Daysection from "./Daysection";
import Weeksection from "./Weeksection";
import Header from "./Header";

const daysection = new Daysection();
const weeksection = new Weeksection();
const header = new Header();

window.onload = () => {
  header.render();
  daysection.render();
  weeksection.render();
};
