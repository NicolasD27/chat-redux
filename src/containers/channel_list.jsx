import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setChannels } from '../actions';


class ChannelList extends Component {
	constructor (props) {
		super(props);
		
	}
	componentWillMount() {
		this.props.setChannels()
	}
	handleClick = (event) => {
		this.props.selectChannel(event.target.innerHTML);
	}
	renderList() {
		return this.props.channels.map((channel) => {
			const classes = channel === (this.props.selectedChannel) ? ("channel-title selected") : ("channel-title")
			return <h2 className={classes} onClick={this.handleClick}>{channel}</h2>
		})
	}

	render() {
		return ( 
			<div className="channel-list">
					<h1>Redux chat</h1>
					{this.renderList()}
				</div>
			);
	}


}
function mapDispatchToProps(dispatch) {
	 return bindActionCreators(
	 {  selectChannel: selectChannel,
		setChannels: setChannels
	  },
	 dispatch
	 );
}

function mapStateToProps(state) {
	 return {
	 	channels: state.channels,
	 	selectedChannel: state.selectedChannel
	 };
} 

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);




