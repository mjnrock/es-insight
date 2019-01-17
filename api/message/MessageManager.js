class MessageManager {
	constructor() {
		this.Messages = [];
	}

	Receive(message) {
		this.Messages.push(message);

		return this;
	}

	Deliver(message) {
		
	}
	
	Dispatch() {
		
	}
}

export default MessageManager;