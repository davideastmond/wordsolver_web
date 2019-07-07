import React, { Component } from 'react';
import Query from './query';

class QueryPane extends React.Component {
	/* The query pane is where all the commands are kept */

	render() {
		return (
			<div id="query-pane-div">
				<button type="button" class="btn btn-outline-success">Basic Filter </button>
			</div>
		)
	}
}

export default QueryPane;