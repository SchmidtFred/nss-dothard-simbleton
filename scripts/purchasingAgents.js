import { getAgents } from "./dataAccess.js";

export const purchasingAgents = () => {
    let htmlString = "";
    const agents = getAgents();
    agents.forEach(agent => {
    htmlString += `<section class="agent">
                    <h2 class="agentName">${agent.fullName}</h2>
                    <div class="agentInfo">
                    ${agent.company} <br>
                    ${agent.phoneNumber}
                    </section>`
    })
    return htmlString;
}