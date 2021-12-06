import { businessList } from "./BusinessList.js";
import { getAgents } from "./dataAccess.js";

const mainContainer = document.querySelector(".container");

const render = () => {
    mainContainer.innerHTML = businessList();
}

render();

console.log(getAgents());