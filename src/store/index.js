import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
	return createStore(
		// eslint-disable-next-line no-restricted-globals
		rootReducer(history),
		initialState,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
}
