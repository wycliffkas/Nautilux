import * as types from "../types";

export const getInterventions = () => ({
	type: types.GET_INTERVENTIONS
});

export const getInterventionsSuccess = (interventions) => ({
	type: types.GET_INTERVENTIONS_SUCCESS,
	payload: interventions
});

export const getInterventionsFail = (error) => ({
	type: types.GET_INTERVENTIONS_FAIL,
	payload: error
});

export const getIntervention = (id) => ({
	type: types.GET_INTERVENTION,
	payload: id
});

export const getInterventionSuccess = (intervention) => ({
	type: types.GET_INTERVENTION_SUCCESS,
	payload: intervention
});

export const getInterventionFail = (error) => ({
	type: types.GET_INTERVENTION_FAIL,
	payload: error
});

export const createIntervention = (intervention) => ({
	type: types.CREATE_INTERVENTION,
	payload: intervention
});
