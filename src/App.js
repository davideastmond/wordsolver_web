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
		
		this.state = {sortedWordList: []};
	}

	componentDidMount() {
		// Perhaps get a word List? 
		console.log("App mounted!");
		const wordList = document.getElementById('internal-wordlist-textarea');
		const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		const wordListData = this.loadDefaultWordList();
		wordList.value = wordListData[0];
		wordListCountDisplay.innerHTML = `Word Count: ${wordListData[1]}`;
	}	

	loadDefaultWordList () {
		const wordList = require('./dictionary.json');
		this.setState({sortedWordList: wordList});
		let bigList = "";
		let wordCount = 0;
		wordList.forEach((el) => {
			if (el.length > 2 && el.length <= 12) {
				bigList += el + " ";
				wordCount ++;
			}
		});
		return ([bigList, wordCount]);
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
