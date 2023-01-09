import axios from "axios";

export const getInterventions = () => {
	return axios.get("/interventions");
};

export const getIntervention = (id) => {
	return axios.get(`/intervention/${id}`);
};
