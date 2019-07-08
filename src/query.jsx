import React, { Component } from 'react';

/* A button associated with a wordlist query */
class Query extends React.Component {
	render () {
		return (<button className="btn btn-success"> {this.props.queryType} </button>)
	}
}

export default Query;