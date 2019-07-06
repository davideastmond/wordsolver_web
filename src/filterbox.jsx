import React, { Component } from 'react';

class CharBox extends React.Component {

	testOnClick = (e) => {

		console.log(e.target);
	}

	render () {
		return ( <div className= "charBox">
			<textarea maxLength="1" className="individual-block" onClick={this.testOnClick}></textarea> 	
		</div>)
	}
}

export default CharBox;