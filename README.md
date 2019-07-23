This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# WordSolver (Web)

## About

Furthering my skills in React.js - creating a web version of my WordSolver app.
This app helps users play Scrabble, hang man or Words With Friends.

## How to use

To use this app, you need to query the word list based on different query parameters. Querying essentially filters the list based on the 
query parameters you specify, gradually widdling down the list to a narrow choice of words that will serve your purposes.

The rectangles at the top are single-input textarea boxes where the user will input their query. 

### Basic Queries

The 2 basic things you can do in this app are:
- a basic inclusive filter, or 
- a basic exclusive filter.

A basic filter is something you'd type into the text input boxes (those rectangles) like so:

//ION

Where, in the above case, the word is a 5-letter word ending in the characters ION.

The forward slashes serve as wild-card characters. 

Hit the basic inclusive filter button and the word list will filter everything to only show words that match that query (ie, 5-letter words ending in "ION"). 
The exclusive filter will do exactly the opposite (exclude words that do not match the query).

### Future Features

There will be various types of queries available, and they will be added via buttons that will appear in the query pane.

I also plan to add other query strings such as:

- StartsWith and EndsWith a contiguous string pattern
- Contains / does not contain individual characters
- Contains / does not contain a contiguous string pattern

- Filter or include words of n length

## Tech skills

Node.js,
React.js,
HTML / CSS / Javascript 

## Screen Captures
![Preliminary UI](https://github.com/davideastmond/wordsolver_web/blob/master/res/wordSolverJul222019.png?raw=true)


## Installation

Clone the repo.
Run npm i

## Dependencies

- bootstrap
- react-alert