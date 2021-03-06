import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharBox from './filterbox';
import InputPane from './inputPane';
import { Component}  from 'react';
import QueryPane from './querypane';
import WordListPane from './wordlistpane';
import { doBasicInclusiveFilter, doBasicExclusiveFilter, doStartsWith, doEndsWtih, doContainIndividualCharacters, doNotContainIndividualCharacters } from './filterfunctions';
import { doContainStringOfCharacters, doNotContainStringOfCharacters, doBeginsWithEndsWith } from './filterfunctions';

class App extends Component {
  constructor () {
    super ();
    this.state = {sortedWordList: []};
  }

  componentDidMount() {
    const wordList = document.getElementById('internal-wordlist-textarea');
    // const wordListCountDisplay = document.getElementById("internal-wordlist-woordlistcount");
    
    // wordList.value = wordListData;
    this.LoadWordListAsync();
  }	

  LoadWordListAsync = (e, message) => {
    // Fetch a jsonWordList
    let filteredList = [];
    let bigList = "";
    
    fetch('./dictionary.json')
    .then((response) => {
      response.json()
      .then((d) => { 

        filteredList = d.filter((word) => (word.length > 2 && word.length <= 12)) 
        filteredList = filteredList.map(x => x.toUpperCase());
        
        this.setState({sortedWordList: filteredList}, ()=> {
          // Re-enable the refresh button once state is set, using callback
          document.getElementById("wordlist-pane-reset-button").disabled = false;
        });
        
      
      })
    }).catch((err) => {
      alert("unable to contact server!");
    });
    
    // Call a function to clear the input boxes
    this.resetInputBoxes();
  }

  resetInputBoxes () {
    /* This function clears the text boxes. We'll use HTML / JS to do so */

    const inputPaneElement = document.getElementsByClassName('individual-block');
    for (let i = 0; i < inputPaneElement.length; i++ ) {
      inputPaneElement[i].value = "";
    }
  }

  getInputArray = (e, filter_array) =>  {
    // This is in charge of getting the array of characters used for a filter. This is passed down through props
    console.log(filter_array.queryType);

    if (filter_array.queryType === "Basic Inclusive Filter") {
      if (!filter_array.queryArray.includes("/")) {
        
        return;
      }
      const result = doBasicInclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
      
      if (result) {
        this.setState({sortedWordList: result}, ()=> {
          
        });
      } else {
        
        console.log("some other result");
      }

    } else if (filter_array.queryType === "Basic Exclusive Filter") {
      if (!filter_array.queryArray.includes("/")) {
        
        return;
      }
      const result = doBasicExclusiveFilter(this.state.sortedWordList, filter_array.queryArray);
      if (result) {
        this.setState({sortedWordList: result}, ()=> {
          
        })
      } else {
        // No results found
        alert("No results");
      }

    } else if (filter_array.queryType === "Starts With") {
      // I can validate the queryArray and make sure it contains only alphanumberic
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }
      const result = doStartsWith(this.state.sortedWordList, filter_array.queryArray);
      if (result) {
        this.setState({sortedWordList: result});
      } else {
        // no results found
        alert("No results");
      }

    } else if (filter_array.queryType === "Ends With") {
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }
      const result = doEndsWtih(this.state.sortedWordList, filter_array.queryArray);
      if (result) {
        this.setState({sortedWordList: result});
      } else {
        alert("No results");
      }

    } else if (filter_array.queryType === "Contains Indv Chars") {
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }
      const result = doContainIndividualCharacters(this.state.sortedWordList, filter_array.queryArray);
      if (result) {
        this.setState({sortedWordList: result});
      } else {
        alert("No results");
      }
    
    } else if (filter_array.queryType === "Does Not Contain Indv Chars") {
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }

      const result = doNotContainIndividualCharacters(this.state.sortedWordList, filter_array.queryArray);
      
      if (result) {
        this.setState({ sortedWordList: result });
      } else {
        alert("No results");
      }


    } else if (filter_array.queryType === "Contains String of Chars") {
  
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }
      const result = doContainStringOfCharacters(this.state.sortedWordList, filter_array.queryArray) 

      if (result) {
        this.setState({sortedWordList: result});
      } else {
        alert('No results');
      }
      
    } else if (filter_array.queryType === "Does Not Contain String of Chars") {
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }
      const result = doNotContainStringOfCharacters(this.state.sortedWordList, filter_array.queryArray);
      if (result) {
        this.setState({sortedWordList: result});
      } else {
        alert('No results');
      }

    } else if (filter_array.queryType === "Begins With Ends With") {
      if (filter_array.queryArray.includes("/")) {
        alert('Forward slash not allowed in this type of query');
        return;
      }

      const result = doBeginsWithEndsWith(this.state.sortedWordList, filter_array.queryArray);

      if (result) {
        this.setState({sortedWordList: result}) 
      } else  {
        alert("no result");
      }
    }
  }

  render () {
    return (<div>
      <InputPane/>
      <QueryPane fetchInputArray={this.getInputArray}/>
      <WordListPane wordList={this.state.sortedWordList} refreshList={this.LoadWordListAsync}/>
    </div>
    )
  }
}

export default App;
