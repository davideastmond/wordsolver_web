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
		const wordList = document.getElementById('internal-wordlist-textarea');
		console.log(wordList);
		wordList.value = this.loadDefaultWordList();
	}	

	loadDefaultWordList () {
		const wordList = require('./dictionary.json');
		let bigList = "";
		wordList.forEach((el) => {
			if (el.length > 2 && el.length <= 12) {
				bigList += el + " ";
			}
		});
		return bigList;
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
