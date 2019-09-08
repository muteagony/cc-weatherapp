import "@babel/polyfill";
import "../scss/styles.scss";
import Daysection from "./Daysection";
import Weeksection from "./Weeksection";
import Header from "./Header";
import weatherApi from "../api/api";

const daysection = new Daysection();
const weeksection = new Weeksection();
const header = new Header();


window.onload = () => {
  header.render();
  daysection.render("Toronto");
  weeksection.render("Toronto", "CA");
  //pogoda dla wyszukania
  document.getElementById("header").addEventListener("keypress",function(e){
    if(e.key === "Enter"){
      let x = this.value;
      daysection.render(x);
      weeksection.render(x, "CA");
    }
  });
};