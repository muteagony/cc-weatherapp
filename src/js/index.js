import "@babel/polyfill";
import "../scss/styles.scss";
import Weeksection from "./Weeksection";

const weekSection = new Weeksection();

window.onload = () => {
  weekSection.render('Wrocław');
};
