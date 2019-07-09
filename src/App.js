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
	
		if (window.Worker) {
			
			let wordListWorker = new Worker("wordlist.worker.js");
	
			const wordListData = require('./dictionary.json');
			
			wordListWorker.postMessage({data: wordListData});
			console.log("Posted message to worker");

			
			wordListWorker.onmessage = (e) => {
				const wordListDisplayBox = document.getElementById("internal-wordlist-textarea");
				wordListDisplayBox.innerHTML = e.data;
			};	
		}
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
