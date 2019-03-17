import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import { setUser } from '../actions';
import { selectChannel } from '../actions';

class App extends Component {
	componentWillMount() {
		this.props.setUser();
		this.props.selectChannel("general")
	}
	render() { 
		return (
		    <div className="app">
		      	<ChannelList />
		      	<MessageList />
		    </div>
		  );
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	{ 	setUser: setUser,
		selectChannel: selectChannel
	 },
	dispatch
	);
}

export default connect(null, mapDispatchToProps)(App);
