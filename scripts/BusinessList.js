import { Business } from "./business.js";
import { getBusinesses, getAgents } from "./dataAccess.js";
import { businessListByState } from "./businessByState.js";
import { businessListByIndustry } from "./businessByIndustry.js";
import { purchasingAgent } from "./purchasingAgents.js";

const businessArray = getBusinesses();
const agentArray = getAgents();

export const businessList = () => {
	let html = `<input type="text" placeholder="Enter business name..." id="companySearch" />
			<article class="foundCompanies">
			</article>
			<h1>Active Businesses</h1>
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
			<article class="agentList">`;
	agentArray.forEach((agent) => {
		html += purchasingAgent(agent);
	});
	html += `</article>`;
	return html;
};

export const keyPressEvent = (event) => {
	const companySearchResultArticle = document.querySelector(".foundCompanies");
	if (event.charCode === 13) {
		const foundBusiness = businessArray.find((bus) =>
			bus.companyName.includes(event.target.value)
		);
		if (foundBusiness) {
			companySearchResultArticle.innerHTML = Business(foundBusiness);
		} else {
			const foundAgent = agentArray.find((agent) =>
				agent.fullName.includes(event.target.value)
			);
			if (foundAgent) {
			companySearchResultArticle.innerHTML = purchasingAgent(foundAgent);
			} else {
				window.alert("Could not find search target");
			}
		}
	}
};
