import { businesses } from "./database.js";

export const getBusinesses = () => {
	return businesses.map((bus) => ({ ...bus }));
};

export const getListByState = (stateToFind) => {
	const stateMatch = (business) => {
		return business.addressStateCode === stateToFind;
	};

    return businesses.filter(stateMatch);
};

export const getListByIndustry = (indToFind) => {
    const indMatch = (business) => {
        return business.companyIndustry === indToFind;
    };

    return businesses.filter(indMatch);
};