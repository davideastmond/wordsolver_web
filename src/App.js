import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';
import QueryPane from './querypane';
import WordListPane from './wordlistpane';
class App extends Component {
	constructor () {
		super ();
	}

	componentDidMount() {
		// Perhaps get a word List? 
		this.loadWordList();
	}

	loadWordList = () => {
		let jWordList = require('./dictionary.json');
		
		let filteredList = [];
		const wordListTextBox = document.getElementById("internal-wordlist-textarea");
		let bigString = "";
		jWordList.forEach(element => {
			if (element.length >= 3) {
				bigString += element + " ";
				filteredList.push(element);
			}
		});
		const wordListCount = document.getElementById("internal-wordlist-woordlistcount");
		wordListCount.value = filteredList.length.toString();
		wordListTextBox.value = bigString;
	
	}

	render () {
		return (<div>
		<InputPane/>
		<QueryPane/>
		<WordListPane/>
		</div>
		)
	}
}

export default App;
