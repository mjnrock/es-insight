import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import AuthRootReducer from "./auth/reducers/index";

export default function InitStore() {
	let store = createStore(
		combineReducers({
			...AuthRootReducer()
		}),
		applyMiddleware(thunk)
	);

	return store;
}