import { Business } from "./business.js";
import { getBusinesses } from "./dataAccess.js";
import { businessListByState } from "./businessByState.js";
import { businessListByIndustry } from "./businessByIndustry.js";
import { purchasingAgents } from "./purchasingAgents.js";

export const businessList = () => {
	const businessArray = getBusinesses();
	let html = `<h1>Active Businesses</h1>
            <article class="businessList">`;
	businessArray.forEach((businessObject) => {
		html += Business(businessObject);
	});
	html += "</article>";
	//add in new york stuff
	html += `<h1>New York Businesses</h1>
				<article class="businessList--newYork">
				 ${businessListByState("NY")}
				</article>`;
	//add in manufacturing businesses
	html += `<h1>Manufacturing Businesses</h1>
			 <article class="businessList--manufacturing">
			 ${businessListByIndustry("Manufacturing")}
			 </article>`;
	//list purchasing agents
	html += `<h1>Purchasing Agents</h1>
			<article class="agentList">
			${purchasingAgents()}
			</article>`
	return html;
};
