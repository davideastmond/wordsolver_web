import React, { Component } from 'react';
import CharBox from './filterbox';

class InputPane extends React.Component {
	// We'll return a carousel of eight large text boxes
	render () {
		return (
			<div id="input-pane">
				<span> <CharBox/> <CharBox/> <CharBox/> <CharBox/> <CharBox/> <CharBox/> <CharBox/> <CharBox/></span>
				
			</div>
		)
	}
}

export default InputPane;