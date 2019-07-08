import React, { Component } from 'react';
import Query from './query';

class QueryPane extends React.Component {
	/* The query pane is where all the commands are kept */

	render() {
		return (
			<div id="query-pane-div">
				<div id="query-pane-header"> 
					<h5> Queries </h5>
				</div>
				<Query queryType="Basic Filter"/> <Query queryType="Intermediate Filter"/> <Query queryType="Advanced Filter"/>
			</div>
		)
	}
}

export default QueryPane;