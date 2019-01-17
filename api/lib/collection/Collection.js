import { NewUUID, UuidMap } from "./utility/package";

class Collection {
	constructor(cont) {
		this.Container = cont;

		this.Meta = [];
		this.Options = [];
		this.Rules = [];

		this.UUID = NewUUID();
	}
}

export default Collection;