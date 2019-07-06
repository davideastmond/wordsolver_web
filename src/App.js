import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';

class App extends Component {
	constructor () {
		super ();
	}

	componentDidMount() {
		const elements = document.getElementById('input-pane');
		console.log(elements.children);
	}

	render () {
		return (<div>
		<InputPane/>
		</div>
		)
	}
}

export default App;
