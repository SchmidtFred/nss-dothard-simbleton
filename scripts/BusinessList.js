import { Business } from "./business.js";
import { getBusinesses } from "./dataAccess.js";

export const businessList = () => {
	const businessArray = getBusinesses();
	let html = `<h1>Active Businesses</h1>
            <article class="businessList">`;
	businessArray.forEach((businessObject) => {
		html += Business(businessObject);
	});
    html += "</article>";
    return html;
};
