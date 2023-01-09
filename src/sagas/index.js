import { takeLatest, all, call, put } from "redux-saga/effects";

import * as types from "../types";
import * as api from "../api/intervations";
import {
	getInterventionsSuccess,
	getInterventionSuccess,
	getInterventionFail,
	getInterventionsFail
} from "../actions";

function* getInterventions() {
	// TODO:
	try {
		const response = yield call(api.getInterventions);
		yield put(getInterventionsSuccess(response.data));
	} catch (error) {
		yield put(getInterventionsFail(error.response));
	}
}

function* getIntervention({ payload: id }) {
	try {
		const response = yield call(api.getIntervention, id);
		yield put(getInterventionSuccess(response.data));
	} catch (error) {
		yield put(getInterventionFail(error.response));
	}
}

export default function* rootSaga() {
	yield all([takeLatest(types.GET_INTERVENTION, getIntervention)]);
	yield all([takeLatest(types.GET_INTERVENTIONS, getInterventions)]);
}
