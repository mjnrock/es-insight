import { NewUUID } from "./utility/package";

class Entry {
	constructor(puuid, value = []) {
		this.PromptUUID = puuid;
		this.Values = value;
		this.Timestamp = Date.now();

		this.UUID = NewUUID();
	}
}

export default Entry;