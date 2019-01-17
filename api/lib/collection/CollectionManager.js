import { NewUUID, UuidMap } from "./utility/package";

class CollectionManager {
	constructor(cont) {
		this.Entries = new UuidMap();

		this.UUID = NewUUID();
	}
}

export default CollectionManager;