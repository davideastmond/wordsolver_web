import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';
import QueryPane from './querypane';
import WordListPane from './wordlistpane';
import { doBasicInclusiveFilter, doBasicExclusiveFilter } from './filterfunctions';


class App extends Component {
	constructor () {
		super ();
		this.state = {sortedWordList: []};
	}

	componentDidMount() {
		const wordList = document.getElementById('internal-wordlist-textarea');
		// const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		//const wordListData = this.loadDefaultWordList();
    // wordList.value = wordListData;
    this.testAsyncLoadWordList();
	}	

	loadDefaultWordList = () => {
		
		const wordList = require('./dictionary.json');
		
		let bigList = "";
		let filteredList = [];
		wordList.forEach((el) => {
			if (el.length > 2 && el.length <= 12) {
				bigList += el + " ";
				filteredList.push(el);
			}
		});

		this.setState({sortedWordList: filteredList}, ()=> {
			this.updateWordCount();
		});
		return bigList;
  }
  
  testAsyncLoadWordList = () => {
    // Fetch a jsonWordList
    let filteredList = [];
    let bigList = "";
    fetch('./dictionary.json')
    .then((response) => {
			response.json()
			.then((d) => { 
        filteredList = d.filter((word) => (word.length > 2 && word.length <= 12))
				this.setState({sortedWordList: filteredList});
				this.updateWordCount();
      })
    })
  }

	getInputArray = (e, filter_array) =>  {
		// This is in charge of getting the array of characters used for a filter. This is passed down through props
		console.log(filter_array.queryType);

		if (filter_array.queryType === "Basic Inclusive Filter") {
			const result = doBasicInclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
			
			if (result) {
				this.setState({sortedWordList: result}, ()=> {
					this.updateWordCount();
				});
			} else {
				console.log("some other result");
			}
		} else if (filter_array.queryType === "Basic Exclusive Filter") {
			const result = doBasicExclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
			if (result) {
				this.setState({sortedWordList: result}, ()=> {
					this.updateWordCount();
				})
			} else {
				// No results found
				
			}
		} else if (filter_array.queryArray === "Starts With") {
			
		}
	}

	updateWordCount = () => {
		// Updates the word count based on the state
		const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
		wordListCountDisplay.innerHTML = `Word Count: ${this.state.sortedWordList.length}`;
  }
  
	render () {
		return (<div>
			<InputPane/>
			<QueryPane fetchInputArray={this.getInputArray}/>
			<WordListPane wordList={this.state.sortedWordList} refreshList={this.testAsyncLoadWordList}/>
		</div>
		)
	}
}

export default App;
