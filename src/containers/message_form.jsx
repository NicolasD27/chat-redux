import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};
	}
	
	handleSubmit =  () => {
		this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
		this.setState({value: ""});
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});

	}

	render() {
		return ( 
				<form action="#">
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<button onClick={this.handleSubmit} >Send</button>
				</form> 
				)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	{ createMessage: createMessage },
	dispatch
	);
}

function mapStateToProps(state) {
	return {
	currentUser: state.currentUser,
	selectedChannel: state.selectedChannel
	};
} 


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

