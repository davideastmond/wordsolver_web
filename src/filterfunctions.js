export function doBasicInclusiveFilter (wordListArray, filterStringArray) {
	/* Basic inclusive filter. Using wild cards and character combinations to return
	// an array that matches the filter pattern in length and character position
	// for example //A//N means:
		- a 6 letter word
		- position 2 must be A
		- position 5 must b N
		- the slashes are wild card characters
	*/
	
	const joinedFilter = filterStringArray.join('').trim();
	const requiredMatchingChars = getRequiredMatchingChars(filterStringArray);

	if (requiredMatchingChars < 0) return null;

	// First filter by length
	const lengthFilteredArray = wordListArray.filter(x=> x.length === joinedFilter.length);
	let returnList = [];

	for (let i = 0; i < lengthFilteredArray.length; i++) {
		// Count variable
		let rCharCount = 0;

		for (let j = 0; j < lengthFilteredArray[i].length; j++) {
			if (joinedFilter[j] !== "/") {
				if (joinedFilter[j] === lengthFilteredArray[i][j].toUpperCase()) {
					rCharCount ++;
				}
			}
		}

		if (rCharCount === requiredMatchingChars) {
			returnList.push(lengthFilteredArray[i]);
		}
	
	}

	if (returnList.length > 0) {
		return returnList;
	} else {
		return null;
	}
}

function getRequiredMatchingChars(filterStringArray) {
	let count = 0;
	const fFilte = filterStringArray.join('');
	for (let i = 0; i < fFilte.length; i++) {
		if (filterStringArray[i] !== "/") {
			count ++;
		}
	}

	if (count > 0) {
		return count;
	} else {
		return -1;
	}
}

export function doBasicExclusiveFilter (wordListArray, filterStringArray) {
  // Similar to the basic Inclusive, except it excludes words that match the filter pattern
  const joinedFilter = filterStringArray.join('').trim();
  const requiredMatchingChars = getRequiredMatchingChars(filterStringArray);
  
  if (requiredMatchingChars < 0) return null;

  // First filter by length
	const lengthFilteredArray = wordListArray.filter(x=> x.length === joinedFilter.length);
  let returnList = [];
  
  for (let i = 0; i < lengthFilteredArray.length; i++) {
		// Count variable
		let rCharCount = 0;

		for (let j = 0; j < lengthFilteredArray[i].length; j++) {
			if (joinedFilter[j] !== "/") {
				if (joinedFilter[j] === lengthFilteredArray[i][j].toUpperCase()) {
					rCharCount ++;
				}
			}
		}

		if (rCharCount !== requiredMatchingChars) {
			returnList.push(lengthFilteredArray[i]);
		}
	
	}
	if (returnList.length > 0) {
		return returnList;
	} else {
		return null;
	}
}

export function doStartsWith(wordListArray, filterStringArray) {
	/* Returns array of words that start with the filterString 
	filter string array should have characters 
	 For the filter string, we want to validate the input, which means removing any "/" in the array and just get the alpahbet chars
	 Example input: TRU - returns all words, irrespective of length that start with TRU
	*/
	
	const startsWithString = filterStringArray.join('');

	// Convert the wordList to

	let filteredResults = wordListArray.filter((word)=> {
		if (word.startsWith(startsWithString)) {
			return word;
		}
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}

export function doEndsWtih(wordListArray, filterStringArray) {
	/** Returns words that end with the filterString. Similar to the doStartsWith function 
	 
	*/
	const endsWithString = filterStringArray.join('');

	let filteredResults = wordListArray.filter((word) => {
		if (word.endsWith(endsWithString)) {
			return word;
		}
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}

export function doContainIndividualCharacters(wordListArray, filterStringArray) {
	/** This function only returns words that include all of the individual characters in the filter string 
	 * example input: PHI - only returns words that contain individually all of those three characters no matter where they are
	 * positioned in the word. The number of character matches equals the length of the filterString
	*/
	const charMatchString = filterStringArray.join('');
	const requiredMatchesInteger = charMatchString.length;
	
	let filteredResults = wordListArray.filter((word) => {
		let bumper = 0;
		for (let i = 0; i < charMatchString.length; i++) {
			if (word.indexOf(charMatchString[i]) >= 0) {
				bumper++;
			}
		}
		if (bumper === requiredMatchesInteger) {
			return word;
		} else {
			bumper = 0;
		}
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}

export function doNotContainIndividualCharacters(wordListArray, filterStringArray) {
	/** Returns words that do not have any of the individual characters in the filter string. All characters each individually
	 * must not be present in the list that is returned.
	 */

	const charMatchString = filterStringArray.join('');
	const requiredMatchesInteger = charMatchString.length;

	let filteredResults = wordListArray.filter((word) => {
		let bumper = 0;
		for (let i = 0; i <  charMatchString.length; i++ ) {
			if (word.indexOf(charMatchString[i]) > 0) {
				return false;
			}
		}
		return true;
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}
export function doContainStringOfCharacters(wordListArray, filterStringArray) {
	/** Returns words that contain the contiguous string filterStringArray, anywhere in the string, irrespective of stirng length */
	const charMatchString = filterStringArray.join('');
	
	let filteredResults = wordListArray.filter((word) => {
		if (word.indexOf(charMatchString) > 0 ) {
			return true;
		} else {
			return false;
		}
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}

export function doNotContainStringOfCharacters(wordListArray, filterStringArray) {
	/** Return words that do not contain the contiguous string filterString array */
	const charMatchString = filterStringArray.join('');

	let filteredResults = wordListArray.filter((word) => {
		if (word.indexOf(charMatchString) < 0 ) {
			return true;
		} else {
			return false;
		}
	});

	if (filteredResults.length > 0) {
		return filteredResults;
	}
}

export function doBeginsWithEndsWith(wordListArray, filterStringArray) {
	/** The filter string is an array of two characters 
	 * filterStringArray[0] is the first character of the word to match, and index filterStringArray[length-1] is the last.
	 * Both matches must be true to have the word in the filter
	 */
	
	 let filterString = filterStringArray.join('');
	 console.log("Do begins ends called");
	 let filteredResults = wordListArray.filter((word) => {
		 if (filterString[0] === word[0] && filterString[filterString.length - 1] === word[word.length - 1]) {
			 return true;
		 }
	 });

	 if (filteredResults.length > 0) {
		return filteredResults;
	 }
}

export function doesNotBeginWithEndsWith (wordListArray, filterStringArray) {
	let filterString = filterStringArray.join('');
	let filteredResults = wordListArray.filter((word) => { return filterString[0] !== word[0] && filterString[1] !== word[word.length - 1]; });

	if (filteredResults.length > 0) {
		return filteredResults;
	}

}