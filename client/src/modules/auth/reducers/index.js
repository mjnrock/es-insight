import { OnAuth } from "./Auth";

//	This defines the state shape
export default function RootReducer() {
	return {
		XATH_Auth: OnAuth
	};
}