import React, { Component } from 'react';

class Message extends Component {
	
	hashCode(str) {
	    let hash = 0;
	    for (let i = 0; i < str.length; i++) {
	       hash = str.charCodeAt(i) + ((hash << 5) - hash);
	    }
	    return hash;
	} 

	intToRGB(i){
	    const c = (i & 0x00FFFFFF)
	        .toString(16)
	        .toUpperCase();

	    return "00000".substring(0, 6 - c.length) + c;
	}
	
	render() {		
		const style = {color: `#${this.intToRGB(this.hashCode(this.props.message.author))}`}
		console.log(style);
		return ( 
			<div className="message">
				<p className="author" style={style} >{this.props.message.author}<em className="created-at"> - {this.props.message.created_at.slice(11,19)}</em></p>				
				<p className="content">{this.props.message.content}</p>
			</div>
			)
	}
}

export default Message;

