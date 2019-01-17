import Auth from "../enums/Auth";

export function OnAuth(state = null, action) {
	if (action.type === Auth.AUTH_REQUEST) {
		return {
			Token: "...loading"
		};
	} else if (action.type === Auth.AUTH_SUCCESS) {
		return action.payload;
	} else if (action.type === Auth.AUTH_FAILURE) {
		return {
			Token: null
		};
	}

	return state;
}

export default {
	OnAuth
}