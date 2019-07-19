export function doBasicInclusiveFilter (wordListArray, filterStringArray) {
	// Basic inclusive filter
	
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
  // Similar to the basic Inclusive, except it excludes filter
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