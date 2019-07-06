import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';
import QueryPane from './querypane';

class App extends Component {
	constructor () {
		super ();
	}

	componentDidMount() {
		
	}

	render () {
		return (<div>
		<InputPane/>
		<QueryPane/>
		</div>
		)
	}
}

export default App;
