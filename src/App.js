import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';
import QueryPane from './querypane';
import WordListPane from './wordlistpane';
import { doBasicInclusiveFilter } from './filterfunctions';


class App extends Component {
	constructor () {
		super ();
		
		this.state = {sortedWordList: []};
		
	}

	componentDidMount() {
		
		const wordList = document.getElementById('internal-wordlist-textarea');
		// const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		const wordListData = this.loadDefaultWordList();
		wordList.value = wordListData;
		//wordListCountDisplay.innerHTML = `Word Count: ${wordListData[1]}`;
		
		
	}	

	loadDefaultWordList = () => {
		
		const wordList = require('./dictionary.json');
		
		let bigList = "";
		let wordCount = 0;
		let filteredList = [];
		wordList.forEach((el) => {
			if (el.length > 2 && el.length <= 12) {
				bigList += el + " ";
				filteredList.push(el);
				// wordCount ++;
			}
		});

		this.setState({sortedWordList: filteredList}, ()=> {
			this.updateWordCount();
		});
		return bigList;
	}

	getInputArray = (e, filter_array) =>  {
		// This is in charge of getting the array of characters used for a filter. This is passed down through props
		
		if (filter_array.queryType === "Basic Filter"){
			const result = doBasicInclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
			if (result) {
				this.setState({sortedWordList: result}, ()=> {
					const wordListBox = document.getElementById('internal-wordlist-textarea');
					wordListBox.value = this.state.sortedWordList;
					this.updateWordCount();
				});
			} else {
				// Error in query
			}
		
		}
	}

	updateWordCount = () => {
		// Updates the word count based on the state
		const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		console.log("sorted word list length based on state", this.state.sortedWordList.length);
		wordListCountDisplay.innerHTML = `Word Count: ${this.state.sortedWordList.length}`;
	}
	render () {
		return (<div>
			<InputPane/>
			<QueryPane fetchInputArray={this.getInputArray}/>
			<WordListPane reloadWordList={this.loadDefaultWordList}/>
		</div>
		)
	}
}

export default App;
