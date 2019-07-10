import React, { Component } from 'react';
import ReactDOM from 'react-dom'

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

	handleKeyDownEvent = (e, indexInfo) => {
	
		// Handle the auto tabbing
		let box;
		switch (indexInfo) {
			case 0:
					box = ReactDOM.findDOMNode(this.refs.box1);
					box.childNodes[0].focus();
				break;
			case 1:
					box = ReactDOM.findDOMNode(this.refs.box2);
					box.childNodes[0].focus();
				break;
			case 2:
					box = ReactDOM.findDOMNode(this.refs.box3);
					box.childNodes[0].focus();
				break;
			case 3:
					box = ReactDOM.findDOMNode(this.refs.box4);
					box.childNodes[0].focus();
				break;
			case 4:
					box = ReactDOM.findDOMNode(this.refs.box5);
					box.childNodes[0].focus();
				break;
			case 5:
					box = ReactDOM.findDOMNode(this.refs.box6);
					box.childNodes[0].focus();
				break;
			case 6:
					box = ReactDOM.findDOMNode(this.refs.box7);
					box.childNodes[0].focus();
				break;
			case 7:
					box = ReactDOM.findDOMNode(this.refs.box8);
					box.childNodes[0].focus();
				break;
			case 8:
					box = ReactDOM.findDOMNode(this.refs.box9);
					box.childNodes[0].focus();
				break;
			case 9:
					box = ReactDOM.findDOMNode(this.refs.box10);
					box.childNodes[0].focus();
				break;
			case 10:
				box = ReactDOM.findDOMNode(this.refs.box11);
				box.childNodes[0].focus();
				break;
				default:
		}
	}

	render () {
		return (
			<div id="input-pane">
				<CharBox index={0} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box0"/>
				<CharBox index={1} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box1"/>
				<CharBox index={2} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box2"/>
				<CharBox index={3} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box3"/>
				<CharBox index={4} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box4"/>
				<CharBox index={5} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box5"/>
				<CharBox index={6} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box6"/>
				<CharBox index={7} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box7"/>
				<CharBox index={8} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box8"/>
				<CharBox index={9} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box9"/>
				<CharBox index={10} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box10"/>
				<CharBox index={11} funcPrintContents={this.printContents} handleKeyDownEvent={this.handleKeyDownEvent} ref="box11"/>
			</div>
		)
	}
}

export default InputPane;