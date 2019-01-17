import { NewUUID } from "./utility/package";

class Condition {
	constructor(values, isOr = true) {
		this.Values = values;
		this.Join = isOr;

		this.Meta = [];

		this.UUID = NewUUID();
	}
}

export default Condition;