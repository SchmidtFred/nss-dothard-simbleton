import { getListByIndustry } from "./dataAccess.js";

export const businessListByIndustry = (industry) => {
	let htmlString = "";
	const busArray = getListByIndustry(industry);
	busArray.forEach((bus) => {
		htmlString += `<section class="business">
                        <h2 class="businessName">${bus.companyName}</h2>
                        <div class="businessAddress">
                        ${bus.addressFullStreet} <br>
                        ${bus.addressCity}, ${bus.addressStateCode} ${bus.addressZipCode}
                        </div>
                    </section>`;
	});
    return htmlString;
};
