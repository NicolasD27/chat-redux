import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';
import { fetchMessages } from '../actions';
import { selectChannel } from '../actions';
import Message from '../components/message';
import MessageForm from "./message_form"

class MessageList extends Component {
	constructor (props) {
		super(props);
		
	}
	
	componentWillMount() {
		this.updateMessage();
	}
	updateMessage = () => {
		console.log(this.props.channel)
		this.props.fetchMessages(this.props.channel);
	}
	componentDidMount () {
				
		setInterval(this.updateMessage, 1000);
		this.scrollToBot();
		

	}

	scrollToBot () {
		this.refs.channel.scrollTop = this.refs.channel.scrollHeight + 126;
	}
	componentDidUpdate () {
		this.scrollToBot();
	}

	componentWillUnmount () {
		clearInterval(this.props.fetchMessages(this.props.channel), 1000);
	}
	renderList() {
		return this.props.messages.map((message) => {
			return <Message key={message.created_at} message={message} />;
		})

	}

	render() {
		return (
			<div className="channel" ref="channel">
				<h1 className="title">Channel {this.props.channel}</h1>
				<div className="message-list">
					{this.renderList()}
				</div>
				<MessageForm />
			</div>
			
			
			);
	}


}
function mapDispatchToProps(dispatch) {
	 return bindActionCreators(
	 { setMessages: setMessages, fetchMessages: fetchMessages, selectChannel: selectChannel },
	 dispatch
	 );
}

function mapStateToProps(state) {
	 return {
	 messages: state.messages,
	 channel: state.selectedChannel
	 };
} 

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);




