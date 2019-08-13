import React, { Component } from 'react';
import Query from './query';

class QueryPane extends React.Component {
	/* The query pane is where all the commands are kept */

	handleQuery = (e, queryData) => {
		// A query button gets pressed - filter that up to App.js which will handle the query logic and update its state
		// Query Data should hold info about what kind of query it is ( basic filter etc...)
		
		console.log("Handle Query signal");
		const ta_contents = document.getElementById("input-pane");
		const myArray = this.getQueryPaneArray(ta_contents);

		// I need to call the App level function that passes all relevent info
		const myQueryObject = {queryArray: myArray, queryType: queryData.queryType};
		this.props.fetchInputArray(e, myQueryObject);
	}

	getQueryPaneArray = (contents) => {
		// Helper function ( local )
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
				<Query caption="Basic Inclusive Filter" queryType="Basic Inclusive Filter" queryClickButton={this.handleQuery} buttonStyle="btn btn-success"/>
				<Query caption="Basic Exclusive Filter" queryType="Basic Exclusive Filter" queryClickButton={this.handleQuery} buttonStyle="btn btn-success"/>
				<Query caption="Starts With" queryType="Starts With" queryClickButton={this.handleQuery} buttonStyle="btn btn-success"/>
				<br></br>
				<Query caption="Ends With" queryType="Ends With" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
				<Query caption="Contains Indv Chars" queryType="Contains Indv Chars" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
				<Query caption="Does Not Contain Indv Chars" queryType="Does Not Contain Indv Chars" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
				<Query caption="Contains String of Chars" queryType="Contains String of Chars" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
				<Query caption="Does Not Contain String of Chars" queryType="Does Not Contain String of Chars" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
				<Query caption="Begins With Ends With" queryType="Begins With Ends With" queryClickButton={this.handleQuery} buttonStyle="btn btn-primary"/>
			</div>
		)
	}
}

export default QueryPane;