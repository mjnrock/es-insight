import { NewUUID, UuidMap } from "./utility/package";

class Rule {
	constructor() {
		this.Conditions = new UuidMap();

		this.Success = [];
		this.Failure = [];
		this.Meta = [];

		this.UUID = NewUUID();
	}
}

export default Rule;