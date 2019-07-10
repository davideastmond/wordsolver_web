import React, { Component } from 'react';
import Query from './query';

class QueryPane extends React.Component {
	/* The query pane is where all the commands are kept */

	handleQuery = (e, queryData) => {
		// A query button gets pressed - filter that up to App.js which will handle the query logic and update its state
		// Query Data should hold info about what kind of query it is ( basic filter etc...)
		
		//this.props.fetchInputArray(e, queryData);

		const ta_contents = document.getElementById("input-pane");
		const myArray = this.getQueryPaneArray(ta_contents);
		console.log("My Array line 15", myArray, queryData);
	}

	getQueryPaneArray = (contents) => {
		let arrayOfTextBoxValues = [];
		for (let i = 0; i < contents.children.length; i++) {
			arrayOfTextBoxValues.push(contents.children[i].children[0].value.toUpperCase());
		}
		return arrayOfTextBoxValues;
	}

	render() {
		return (
			<div id="query-pane-div">
				<div id="query-pane-header"> 
					<h5> Queries </h5>
				</div>
				<Query queryType="Basic Filter" queryClickButton={this.handleQuery}/>
				<Query queryType="Intermediate Filter" queryClickButton={this.handleQuery}/>
				<Query queryType="Advanced Filter" queryClickButton={this.handleQuery}/>
			</div>
		)
	}
}

export default QueryPane;