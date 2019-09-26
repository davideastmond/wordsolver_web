import React, { Component } from 'react';

class CharBox extends React.Component {

  sendKeyEvenWithIndex = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      this.props.handleKeyDownEvent(e, this.props.index);
    } else if (e.keyCode === 191) {
      this.props.handleKeyDownEvent(e, this.props.index);
    } else if (e.keyCode === 8 || e.keyCode === 46) {
      e.target.value = "";
    
    } else {
      e.preventDefault();
    }
  }

  render () {
    return ( <div className= "charBox">
      <textarea maxLength="1" className="individual-block" onKeyDown={this.sendKeyEvenWithIndex}></textarea> 	
    </div>)
  }
}

export default CharBox;