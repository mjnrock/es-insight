import { NewUUID, UuidMap } from "./utility/package";

class Container {
	constructor() {
		this.Containers = new UuidMap();
		this.Prompts = new UuidMap();

		this.Meta = [];
		this.Options = [];
		this.Rules = [];

		this.UUID = NewUUID();
	}
}

export default Container;