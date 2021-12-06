import { businessList, keyPressEvent } from "./BusinessList.js";


const mainContainer = document.querySelector(".container");

const render = () => {
    mainContainer.innerHTML = businessList();
}

render();

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent)