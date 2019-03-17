// TODO: add and export your own actions
import initialState from './initial_state.js';

export function setMessages () {
	return {
		type: "SET_MESSAGES",
		payload: initialState.messages
	}
}

export function setChannels () {
	return {
		type: "SET_CHANNELS",
		payload: initialState.channels
	}
}

export function setUser () {
	return {
		type: "SET_USER",
		payload: initialState.currentUser
	}
}

export function selectChannel (channel) {
	return {
		type: "SELECT_CHANNEL",
		payload: channel
	}
}

export function fetchMessages (channel) {
	const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
	.then(response => response.json());
	return {
		type: "FETCH_MESSAGES",
		payload: promise
	}
	
}

export function createMessage(channel, author, content) {
	const message = { channel: channel, author: author, content: content };
	const promise = fetch("https://wagon-chat.herokuapp.com/general/messages", {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(message)
	}).then(r => r.json());
	return {
		type: "CREATE_MESSAGE",
		payload: message
	}
}