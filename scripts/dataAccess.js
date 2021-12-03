import { businesses } from "./database.js";

export const getBusinesses = () => {
    return businesses.map(bus => ({...bus}));
}