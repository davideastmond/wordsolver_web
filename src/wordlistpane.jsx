import React, { Component } from 'react';

class WordListPane extends React.Component {

  refreshWordList = (wordListData) => {
    // Essentially parses out the nextbox
    return wordListData.join(" ");
	}

	commandRefresh = (e) => {
		console.log(e);
		this.props.refreshList(e);
	}
	
	render () {
		return(
			<div id="wordlist-pane">
				<div id="wordlist-pane-header"> 
					<h5> Word List </h5>
				</div>
				<textarea id="internal-wordlist-textarea" value={this.refreshWordList(this.props.wordList)} readOnly>
				</textarea>
				<div>
					<h5 id="internal-wordlist-woordlistcount"> Word Count: {this.props.wordList.length} </h5>
				</div>
				<div id="wordlist-pane-reset-button-div">
					<button id="wordlist-pane-reset-button" className="btn btn-info" onClick={this.commandRefresh}>Reset</button>
				</div>
			</div>
		)
	}
}

export default WordListPane;