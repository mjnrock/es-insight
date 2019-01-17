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

	Add(...ents) {
		for(let i in ents) {
			this.Entries[ents[i].UUID] = ents[i];
		}

		return this;
	}

	Remove(...ents) {
		for(let i in ents) {
			let ent = ents[i];

			if(typeof ent === "string" || ent instanceof String) {
				delete this.Entries[ent];
			} else {
				delete this.Entries[ent.UUID];
			}
		}

		return this;
	}

	ForEach(callback, ...args) {
		if(typeof callback === "function") {
			Object.entries(this.Entries).forEach(([ key, value] = e, i) => {
				callback(key, value, i, this, ...args);
			});
		}
	}
}

export default UuidMap;