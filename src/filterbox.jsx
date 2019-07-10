import React, { Component } from 'react';

class CharBox extends React.Component {

	sendKeyEvenWithIndex = (e) => {
		this.props.handleKeyDownEvent(e, this.props.index);
	}

	render () {
		return ( <div className= "charBox">
			<textarea maxLength="1" className="individual-block" onKeyPress={this.sendKeyEvenWithIndex}></textarea> 	
		</div>)
	}
}

export default CharBox;