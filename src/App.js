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
		// Perhaps get a word List? 
		console.log("App mounted!");
		const wordList = document.getElementById('internal-wordlist-textarea');
		const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		const wordListData = this.loadDefaultWordList();
		wordList.value = wordListData[0];
		wordListCountDisplay.innerHTML = `Word Count: ${wordListData[1]}`;
	}	

	loadDefaultWordList = () => {
		
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

	getInputArray = (e, filter_array) =>  {
		// This is in charge of getting the array of characters used for a filter. This is passed down through props
		

		// We've now got a filter string and a query type
		// console.log(this.state.sortedWordList);
		
		if (filter_array.queryType === "Basic Filter"){
			const result = doBasicInclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
			console.log("result is", result); 
			
			this.setState({sortedWordList: result}, ()=> {
				const wordListBox = document.getElementById('internal-wordlist-textarea');
				wordListBox.value = this.state.sortedWordList;
				console.log(this.state.sortedWordList);
			});
		
		}
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
