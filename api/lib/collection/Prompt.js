import { NewUUID, KVP } from "./utility/package";

class Prompt {
	/**
	 * 
	 * @param {obj} obj 
	 * @param {enum} type 
	 * @param {arr} responses 
	 * @param {arr} validation 
	 */
	constructor(obj, type, responses, validation = []) {
		this.Type = type;
		this.Responses = responses;
		this.Validation = validation;
		
		this.Meta = Object.entries(obj || {}).map(([key, value] = ent) => new KVP(key, value));
		this.Options = [];

		this.UUID = NewUUID();
	}
}

export default Prompt;