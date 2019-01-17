import { NewUUID } from "./package";

class UuidMap {
	constructor(entries = {}) {
		this.Entries = entries;

		this.UUID = NewUUID();
	}

	GetEntries() {
		return this.Entries;
	}
	SetEntries(entries = {}) {
		this.Entries = entries;

		return this;
	}

	Has(uuid) {
		return this.Entries[uuid] !== null && this.Entries[uuid] !== void 0;
	}

	Get(uuid) {
		return this.Entries[uuid];
	}

	Add(...conts) {
		for(let i in conts) {
			this.Entries[conts[i].UUID] = conts[i];
		}

		return this;
	}

	Remove(...conts) {
		for(let i in conts) {
			delete this.Entries[conts[i].UUID];
		}

		return this;
	}

	ForEach(callback, ...args) {
		if(typeof callback === "function") {
			Object.entries(this.Entries).forEach(([ key, value] = e, i) => {
				callback(key, value, i, this);
			});
		}
	}
}

export default UuidMap;