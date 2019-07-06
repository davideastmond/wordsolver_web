import React, { Component } from 'react';
import CharBox from './filterbox';

class InputPane extends React.Component {
	// We'll return a carousel of eight large text boxes
	componentDidMount() {
	
	}
	render () {
		return (
			<div id="input-pane">
				<CharBox index={0}/> <CharBox index={1}/> <CharBox index={2}/> <CharBox index={3}/> <CharBox index={4}/> <CharBox index={5}/> <CharBox index={6}/> <CharBox index={7}/>
				
			</div>
		)
	}
}

export default InputPane;