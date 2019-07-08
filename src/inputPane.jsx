import React, { Component } from 'react';
import CharBox from './filterbox';

class InputPane extends React.Component {
	// We'll return a carousel of eight large text boxes
	componentDidMount() {
	
	}

	printContents = (e) => {
		/* This will print the contents of each textArea box 
		This will be transformed into a function that gathers all the values of the individualBoxes and
		perhaps stores them in an array*/
		const ta_contents = document.getElementById("input-pane");
		let arrayOfTextBoxValues = [];
		for (let i = 0; i < ta_contents.children.length; i++) {
			arrayOfTextBoxValues.push(ta_contents.children[i].children[0].value.toUpperCase());
		}
		console.log("Box Values", arrayOfTextBoxValues);
	}

	render () {
		return (
			<div id="input-pane">
				<CharBox index={0} funcPrintContents={this.printContents}/><CharBox index={1} funcPrintContents={this.printContents} />
				<CharBox index={2} funcPrintContents={this.printContents}/><CharBox index={3} funcPrintContents={this.printContents}/>
				<CharBox index={4} funcPrintContents={this.printContents}/><CharBox index={5} funcPrintContents={this.printContents}/>
				<CharBox index={6} funcPrintContents={this.printContents}/><CharBox index={7} funcPrintContents={this.printContents}/>
				<CharBox index={8} funcPrintContents={this.printContents}/><CharBox index={9} funcPrintContents={this.printContents}/>
				<CharBox index={10} funcPrintContents={this.printContents}/><CharBox index={11} funcPrintContents={this.printContents}/>
			</div>
		)
	}
}

export default InputPane;