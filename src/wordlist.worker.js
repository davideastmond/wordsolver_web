
onmessage = (e) => {
	console.log('Worker: Message received from main script');
	let rawList = e.data;
	console.log(e);	
	let bigString = "";
	rawList.forEach((element) => {
		if (element.length >= 3 && element.length <= 12) {
			bigString += element + " ";
		}
	});
	postMessage(bigString.trim());
};