import React, { Component } from 'react';
import wordlist from './wordlist';
class WordListPane extends React.Component {


	render () {
		return(
			<div id="wordlist-pane">
				<textarea id="internal-wordlist-frame" readOnly>
					
				</textarea>
			</div>
		)
	}
}

export default WordListPane;