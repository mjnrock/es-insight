import EnumAuth from "./../enums/Auth";

export const Attempt = (uid, pw) => async dispatch => {
	dispatch({
		type: EnumAuth.AUTH_REQUEST
	});

	try {
		const url = `http://localhost:6500/auth/${ uid }/${ pw }`;
		const response = await fetch(url);
		const json = await response.json();

		//TODO Add all the user details too (First, Last, Username, Email, etc.)
		dispatch(Success(json.Token));
	} catch (e) {
		dispatch(Failure());
	}
}

export function Success(token) {
	return {
		type: EnumAuth.AUTH_SUCCESS,
		payload: {
			Token: token
		}
	}
}
export function Failure() {
	return {
		type: EnumAuth.AUTH_FAILURE
	}
}

export default {
	Attempt,
	Success,
	Failure
}