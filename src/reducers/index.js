import { combineReducers } from "redux";

import {
	GET_INTERVENTIONS,
	GET_INTERVENTION,
	GET_INTERVENTIONS_SUCCESS,
	GET_INTERVENTIONS_FAIL,
	GET_INTERVENTION_FAIL,
	GET_INTERVENTION_SUCCESS,
	CREATE_INTERVENTION
} from "../types";

const initialState = {
	interventions: [],
	intervention: {},
	error: {
		message: ""
	},
	loadingInterventions: false,
	loadingIntervention: false
};

export const interventions = (state = initialState, action) => {
	switch (action.type) {
		case GET_INTERVENTIONS:
			return {
				...state,
				loadingInterventions: true
			};
		case GET_INTERVENTIONS_SUCCESS:
			return {
				...state,
				loadingInterventions: false,
				interventions: action.payload
			};
		case GET_INTERVENTIONS_FAIL:
			return {
				...state,
				error: {
					message: "Error"
				},
				loadingInterventions: false
			};
		case GET_INTERVENTION:
			return {
				...state,
				loadingIntervention: true
			};
		case GET_INTERVENTION_SUCCESS:
			return {
				...state,
				intervention: action.payload,
        loadingIntervention: false
			};
		case GET_INTERVENTION_FAIL:
			return {
				...state,
				error: {
					message: "Error"
				},
				loadingIntervention: false
			};
		case CREATE_INTERVENTION:
			const numberOfItems = state.interventions.length;
			const updatedIntervention = {
				...action.payload,
				id: numberOfItems + 1
			};

			return {
				...state,
				interventions: [...state.interventions, updatedIntervention]
			};
		default:
			return state;
	}
};

export default () =>
	combineReducers({
		interventions
	});
