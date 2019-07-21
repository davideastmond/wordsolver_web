import React, { Component } from 'react';

/* A button associated with a wordlist query */
class Query extends React.Component {

	handleQueryClickButtonLocal = (e) => {
		this.props.queryClickButton(e, {queryType: this.props.queryType});
	}
	render () {
		return (<button className={this.props.buttonStyle} onClick={this.handleQueryClickButtonLocal}> {this.props.queryType} </button>)
	}
}

export default Query;