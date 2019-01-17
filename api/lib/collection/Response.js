import { NewUUID } from "./utility/package";

class Response {
	constructor(key, value, order = 1) {
		this.Key = key;
		this.Value = value;
		this.Ordinal = order;

		this.UUID = NewUUID();
	}
}

export default Response;