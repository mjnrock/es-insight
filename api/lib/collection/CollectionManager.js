import { NewUUID, UuidMap } from "./utility/package";

class CollectionManager {
	constructor() {
		this.Entries = new UuidMap();

		this.UUID = NewUUID();
	}

	Register(collection) {
		this.Entries.Add(collection);

		return this;
	}
	Unregister(value) {
		this.Entries.Remove(value);

		return this;
	}
}

export default CollectionManager;