import { businessList } from "./BusinessList.js";

const mainContainer = document.querySelector(".container");

const render = () => {
    mainContainer.innerHTML = businessList();
}

render();