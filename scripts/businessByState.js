import { getListByState } from "./dataAccess.js";

export const businessListByState = (state) => {
	let htmlString = "";
	const busArray = getListByState(state);
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
