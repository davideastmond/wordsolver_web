import React, { Component } from 'react';

class WordListPane extends React.Component {

  refreshWordList = (wordListData) => {
    // Essentially parses out the nextbox
    return wordListData.join(" ");
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
					<h5 id="internal-wordlist-woordlistcount" > </h5>
				</div>
				<div id="wordlist-pane-reset-button-div">
					<button id="wordlist-pane-reset-button" className="btn btn-info">Reset</button>
				</div>
			</div>
		)
	}
}

export default WordListPane;