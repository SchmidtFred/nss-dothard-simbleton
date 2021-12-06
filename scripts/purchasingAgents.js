export const purchasingAgent = (agent) => {
    let htmlString = "";
    htmlString += `<section class="agent">
                    <h2 class="agentName">${agent.fullName}</h2>
                    <div class="agentInfo">
                    ${agent.company} <br>
                    ${agent.phoneNumber}
                    </section>`
    
    return htmlString;
}