export default function(state, action) {
	if (state === undefined) {
		return [];
	}
	switch (action.type) {
		case "SET_MESSAGES":
			return action.payload;
		case "FETCH_MESSAGES":
			return action.payload.messages;
		case "CREATE_MESSAGE":
			let messages = state;
			messages.push(action.payload);
			return messages;
	    default:
	    	return state;
	  }
}
