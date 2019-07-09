This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# WordSolver (Web)

## About

Furthering my skills in React.js - creating a web version of my WordSolver app.
This app helps users play Scrabble, hang man or Words With Friends.

## How to use

To use this app, you need to query the word list based on different query parameters.

The rectangles at the top are single-input textarea boxes where the user will input their query. The most basic thing you can do in this app is a basic filter.

A basic filter is something you'd type into the text input boxes (those rectangles) like so:

//ION

Where, in the above case, the word is a 5-letter word ending in the characters ION. Hit the basic filter button and the word list will filter everything out to only show words that match that query (ie, 5-letter words ending in "ION").

There will be various types of queries available, and they will be added via buttons that will appear in the query pane.

I also plan to add other query strings such as

*ION

where this will retrieve any word (irrespective of length) that ends in "ION", for example. And:

STR*

where this will retrieve any word (irrespective of length) that starts with "STR" ,for example.

## Tech skills

Node.js,
React.js,
HTML / CSS / Javascript / maybe some jQuery? 

And Web Workers - I'll use Webworkers to minimize blocking of the UI when the word list (which is quite large) is being loaded.

## Screen Captures
![Preliminary UI](https://github.com/davideastmond/wordsolver_web/blob/master/res/wordSolver.JPG?raw=true)

## Installation

Clone the repo.
Run npm i

## Dependencies
