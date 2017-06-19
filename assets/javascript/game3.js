var gameObject = {
	gameWords : [],
	gameWordsFunction : function () {
		for (var i in gameObject.wordBankObject) {
			gameObject.gameWords.push(gameObject.wordBankObject[i].word);
		}
		//console.log(gameObject.gameWords);
		return gameObject.gameWords;
	},
	shuffleWords : function (array) {
		var i = gameObject.gameWords.length,
		j = 0
		temp = [];

		while (i--) {
			j = Math.floor(Math.random() * (i+1));
			temp = array[i];
			array[i] = array [j];
			array[j] = temp;
		}
		//console.log(gameObject.gameWords);
		return array;
	}, 
	currentWordArray : [],
	getCurrentWord : function () {		
		currentWord = [];
		turn = 0;
		var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
		console.log(idx);
		currentWord.push(gameObject.gameWords[idx]);
		console.log(currentWord);
		var currentWordString = currentWord.toString();
		console.log(currentWordString);
		gameObject.currentWordArray = currentWordString.split("");
		console.log(gameObject.currentWordArray);
		for (i in gameObject.wordBankObject) {

		 	if (currentWordString === gameObject.wordBankObject[i].word) {
		 		document.getElementById("region").innerHTML = "Region: " + gameObject.wordBankObject[i].region;
		 		document.getElementById("hint").innerHTML = "Hint: " + gameObject.wordBankObject[i].description;
		 		document.getElementById("current-photo").src = gameObject.wordBankObject[i].image;
		 	}
		 };
		return gameObject.currentWordArray;
	},
	dashArray : [],
	dashArray : function (){
		spaces = " ";
		dash = "_";
		dashWord = [];
		turn = 0;
		var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
		dashWord.push(gameObject.gameWords[idx]);
		var dashWordString = dashWord.toString();
		gameObject.dashArray = dashWordString.split("");
		console.log(gameObject.dashArray);
		for (i in gameObject.dashArray) {
		 	if (gameObject.dashArray[i] !== spaces) {//if the letter is not a space
		 		gameObject.dashArray[i] = dash;
		 	} else if (gameObject.dashArray[i] === spaces) {
		 		gameObject.dashArray[i] = spaces;
		 	}
		}
		console.log(gameObject.dashArray);
		document.getElementById("neighborhood-name").innerHTML = gameObject.dashArray.join('&nbsp;&nbsp;');
	},
	wordBankObject : [
						{region: "South Charlotte", 
						 description: "Located along Pineville-Matthews Road,  the general area of Charlotte which surrounds the eponymous mixed-use shopping center, apartment community, office complex and medical park which opened in 1989. The shopping center is home to Charlotte's first Wal-Mart store, and the area's name comes from the abundance of trees in the area.", 
					     word: "THE ARBORETUM", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A newer upscale area, along the NC/SC border, with an eponymously titled resort; originally a large hunting tract owned by the Harris family, descendants of former North Carolina Governor Cameron A. Morrison.", 
					     word: "BALLANTYNE", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "Centered on the intersection of Ardrey Kell and Rea roads, located in between the Arboretum and Ballantyne neighborhoods", 
					     word: "BLAKENEY", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A small neighborhood along South Kings Drive and East 4th Street between the Elizabeth and Myers Park neighborhoods; among the oldest surviving black residential areas of Charlotte; according to local tradition, it was built as a servants' community for the adjoining streetcar suburb of Myers Park, which began to develop in 1912.", 
					     word: "CHERRY", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "Centered on the intersection of Randolph and Sharon Amity roads, most likely taking its name from the large eponymously titled shopping center,which was one of Charlotte's first suburban malls.", 
					     word: "COTSWOLD", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A historic streetcar suburb of largely craftsman-style bungalows located directly South of uptown", 
					     word: "DILWORTH", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "Located along East 7th Street and Elizabeth Avenue, is a historic streetcar suburb. Also located here are two large hospitals and the city's municipal football stadium.", 
					     word: "ELIZABETH", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A former industrial district directly south of Uptown that has been converted into an entertainment and office district", 
					     word: "SOUTH END", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A wealthy master-planned neighborhood from the early 20th century characterized by its curving streets and mature oaks", 
					     word: "MYERS PARK", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A small edge city centered on the intersection of Sharon Road and Fairview Road. It includes the nearby neighborhoods of Morrocroft and Foxcroft. Its name is derived from the upscale eponymously titled mall, which opened on February 12, 1970. ", 
					     word: "SOUTHPARK", 
						 image: "assets/images/South.jpg"},
						{region: "West Charlotte", 
						 description: "A neighborhood located in the extreme west bordering Gaston County near the Charlotte-Douglas International Airport.", 
					     word: "BERRYHILL", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "In west Charlotte along Beatties Ford Rd, is a historically African-American neighborhood surrounding Johnson C. Smith University", 
					     word: "BIDDLEVILLE", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "Historic area between Wilkinson Blvd, Freedom Drive, W Morehead St, and Ashley Rd. This includes parts of Ashley Park; was a United States Army facility in Charlotte, North Carolina, United States during the early 20th century.", 
					     word: "CAMP GREENE", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "A Tank town, located in western Mecklenburg County bordering Gaston County; derives its name from the small creek bearing the same name", 
					     word: "PAW CREEK", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "A historic streetcar suburb north of Biddleville named in honor of a revered African-American educator", 
					     word: "WASHINGTON HEIGHTS", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "An original streetcar suburb mainly developed in 1920's by E.C. Griffith. It is a historically registered neighborhood adjacent to uptown Charlotte", 
					     word: "WESLEY HEIGHTS", 
						 image: "assets/images/West.jpg"},
						{region: "North Charlotte", 
						 description: "A former mill village located east of Uptown, bordered by N. Davidson St., Parkwood Ave, 10th Ave, and Hawthorne St.", 
					     word: "BELMONT", 
						 image: "assets/images/North.jpg"},
						{region: "North Charlotte", 
						 description: "Centered on a mineral spring, is located north of I-85 along West Sugar Creek Road.", 
					     word: "DERITA", 
						 image: "assets/images/North.jpg"},
						{region: "North Charlotte", 
						 description: "A former mill village previously called North Charlotte, is located along North Davidson Street.", 
					     word: "NODA", 
						 image: "assets/images/North.jpg"},
						{region: "North Charlotte", 
						 description: "The portion of Charlotte in the extreme northeast around UNC Charlotte; home to a large research park, a university, PNC Music Pavillion, and IKEA", 
					     word: "UNIVERSITY CITY", 
						 image: "assets/images/North.jpg"},
						{region: "East Charlotte", 
						 description: "Area is named after the former eponymous mall, that was demolished in the 2014", 
					     word: "EASTLAND", 
						 image: "assets/images/East.jpg"},
						{region: "East Charlotte", 
						 description: "Roughly bound by Hawthorne Lane to the west, The Plaza to the north, Briar Creek Road and the Charlotte Country Club to the east and Central Avenue to the south; Locally known as one of Charlotte's most diverse and eclectic neighborhoods, it is filled with art galleries, funky stores, and restaurants", 
					     word: "PLAZA MIDWOOD", 
						 image: "assets/images/East.jpg"},
						{region: "East Charlotte", 
						 description: "An area of East Charlotte bounded by Rama Rd., Sardis Rd. and the McAlpine Greenway; The area's dominant architectural style is the ranch-style house with brick or wood exterior.", 
					     word: "STONEHAVEN", 
						 image: "assets/images/East.jpg"},
						{region: "Center City", 
						 description: "Center-city ward; Current attractions include: The Main Library, the Spirit Square portion of the North Carolina Blumenthal Performing Arts Center, ImaginOn Children's Learning Center, Levine Museum of the New South, the Spectrum Center, and is the home of the Charlotte Hornets", 
					     word: "FIRST WARD", 
						 image: "assets/images/Center.jpg"},
						{region: "Center City", 
						 description: "Ward, formerly known as Brooklyn, was a traditionally African-American neighborhood that was converted in the mid-twentieth century into a city and county government office center in efforts to revitalize the area. ", 
					     word: "SECOND WARD", 
						 image: "assets/images/Center.jpg"},
						{region: "Center City", 
						 description: "Ward known chiefly as the home of the Carolina Panthers who play at Bank of America Stadium.", 
					     word: "THIRD WARD", 
						 image: "assets/images/Center.jpg"},
						{region: "Center City", 
						 description: "Parts of this ward fall within a registered historic district as one of the few neighborhoods of single-family homes left within the I-277 loop.", 
					     word: "FOURTH WARD", 
						 image: "assets/images/Center.jpg"} 
						 ]
}

//when document is loaded run the following functions:
document.querySelector("body").onload = function start() {
 	var turn = 0;//this will increase when wins or losses change
 	//redefine turn to equal a function. if wordMatch equals true turn++;
 	var wins = 0;
 	var losses = 0;
 	var guesses = 12;
 	var guessesBank = [];
 	var uniqueGuesses = {};
 	//var currentWord = getCurrentWord();//an unmutated array of the current word
 	//var dashArray = currentWordString.split("");
 	//var dashWord = dashArray();
 	var uniqueGuessesKeys = [];
 	//var currentWordString = currentWord.toString();

 	//var currentWordArray = currentWordString.split("");

	console.log(gameObject);
	//document.getElementById("neighborhood-name").innerHTML = gameObject.wordBankObject[0].word;
	//gameObject.splitWord();
	gameObject.gameWordsFunction();
	gameObject.shuffleWords(gameObject.gameWords);
	gameObject.getCurrentWord(gameObject.gameWords);
	gameObject.dashArray();
	//console.log(currentWordString);
	//getCurrentWord(gameObject.gameWords);

	 //display text for word
	//run the object function for current word
	//turn it to dashes with the object function
	//display it to the document with the object function
	// function getCurrentWord(array) {
	// 	turn = 0;
	// 	var arr = [];
	// 	var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
	// 	arr.push(gameObject.gameWords[idx]);
	// 	console.log(arr);
	// 	var text = arr.toString();
	// 	var array = text.split("");
	// 	console.log(array);
	// 	return array;
		// currentWord.push(gameObject.gameWords[arr]);
		// console.log(currentWord);
		// return currentWord
	//}

	// function getCurrentWord() {
	// 	// spaces = " ";
	// 	// dash = "_";
	// 	//hyphen = "-";
	// 	currentWord = [];
	// 	turn = 0;
	// 	var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
	// 	console.log(idx);
	// 	currentWord.push(gameObject.gameWords[idx]);
	// 	console.log(currentWord);
	// 	var currentWordString = currentWord.toString();
	// 	console.log(currentWordString);
	// 	var currentWordArray = currentWordString.split("");
	// 	console.log(currentWordArray);
	// 	for (i in gameObject.wordBankObject) {

	// 	 	if (currentWordString === gameObject.wordBankObject[i].word) {
	// 	 		document.getElementById("region").innerHTML = "Region: " + gameObject.wordBankObject[i].region;
	// 	 		document.getElementById("hint").innerHTML = "Hint: " + gameObject.wordBankObject[i].description;
	// 	 		document.getElementById("current-photo").src = gameObject.wordBankObject[i].image;
	// 	 	}
	// 	 };
	// 	return currentWordArray;
	// }
		//this gets mutated below to dashes, and it also only exists during the current function. 

		//rename to dashArray
		//define dash outside of the function. make the if statement the function
	// function dashArray() {
	// 	spaces = " ";
	// 	dash = "_";
	// 	dashWord = [];
	// 	turn = 0;
	// 	var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
	// 	dashWord.push(gameObject.gameWords[idx]);
	// 	var dashWordString = dashWord.toString();
	// 	var dashArray = dashWordString.split("");
	// 	console.log(dashArray);
	// 	for (i in dashArray) {
	// 	 	if (dashArray[i] !== spaces) {//if the letter is not a space
	// 	 		dashArray[i] = dash;
	// 	 	} else if (dashArray[i] === spaces) {
	// 	 		dashArray[i] = spaces;
	// 	 	}
	// 	}
	// 	console.log(dashArray);
	// 	document.getElementById("neighborhood-name").innerHTML = dashArray.join('&nbsp;&nbsp;');
		
	// }
	// 	dashArray = currentWordString.split("");
	// 	console.log(dashArray);
	// 	for (i in dashArray) {
	// 	 	if (dashArray[i] !== spaces) {//if the letter is not a space
	// 	 		console.log(true);
	// 	 		dashArray[i] = dash;
	// 	 		console.log(dashArray);
	// 	 	} else if (dashArray[i] === spaces) {
	// 	 		console.log(false);
	// 	 		dashArray[i] = spaces;
	// 	 		console.log(dashArray);
	// 	 	}
	// 	 }
	// 	 document.getElementById("neighborhood-name").innerHTML = dashArray.join('&nbsp;&nbsp;');
		 
	// 	 //either make a function, or declare this with the variables at the top. it's basically it's own function. 
		
		// for (i in gameObject.wordBankObject) {

		//  	if (currentWordString === gameObject.wordBankObject[i].word) {
		//  		document.getElementById("region").innerHTML = "Region: " + gameObject.wordBankObject[i].region;
		//  		document.getElementById("hint").innerHTML = "Hint: " + gameObject.wordBankObject[i].description;
		//  		document.getElementById("current-photo").src = gameObject.wordBankObject[i].image;
		//  	}
		//  }

	// 	 //store the actual current word here, or do it in the object;
	// };
	// //listen for key strokes
	document.onkeyup = function(event) {
		//when key strokes are entered:
		uniqueGuesses = {};
		//log guesses to the document
		var userGuess = event.keyCode || event.which
		console.log(userGuess);
		//display playerGuess : [],
		if (userGuess > 64 && userGuess < 91) {
			var guesses = String.fromCharCode(userGuess);
			guessesBank.push(guesses);//logs all valid key codes to guesses Array
			for (var i = 0; i < guessesBank.length; i++) {//https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
				uniqueGuesses[guessesBank[i]] = 1 + (uniqueGuesses[guessesBank[i]] || 0);//logs unique object name for each guess
			} 
		} else if (userGuess < 64 || userGuess > 91) {
				return document.getElementById("error").innerHTML = "Type another letter to continue!";
			};
		console.log(uniqueGuesses);
		console.log(Object.keys(uniqueGuesses));
		var uniqueGuessesKeys = Object.keys(uniqueGuesses);//stores object keys to their own array
		console.log(uniqueGuessesKeys);
		document.getElementById("guesses").innerHTML = "Guesses: " + uniqueGuessesKeys;
		//};

		// 	//if uniqueGuessesKeys match currentwordarray, replace uniqueGuessesKey string in dash array at the matching index from the current word
		// 	function letterMatch() {
		// 		var currentWordArray = currentWordString.split("");
		// 		for (var i = 0; i < uniqueGuessesKeys.length; i++) {
		// 			if (i === currentWordArray[i]) {
		// 				console.log(i + "matches" + currentWordArray[i]);
		// 			}
		// 		}
		// 	}

		// 	letterMatch();
		/*findarray - uniquesGuessesKeys has one index. use find index to find the first letter in unique guesses key that
		matches a letter in the currentWordArray*/
		for (k = 0, j = 0; k < gameObject.currentWordArray.length; k++, j=uniqueGuessesKeys.length-1) {
			if (uniqueGuessesKeys[j] === gameObject.currentWordArray[k]) {
				return console.log("correct guess:" + uniqueGuessesKeys[j] + "equals " + gameObject.currentWordArray[k]);
			} else {
				console.log("incorrect guess");
			};
		}
		//currentWordArray.some(letterMatch);
		// for (var i = 0; i < gameObject.currentWordArray.length; i++) {
		// 	var playerGuess = uniqueGuessesKeys[i];
		// 	var correctLetter = gameObject.currentWordArray[i];
		// 	var idx = gameObject.currentWordArray.indexOf(gameObject.currentWordArray[i]);
		// 	if (playerGuess === correctLetter) {
		// 	console.log("correct guess:" + playerGuess + "equals " + correctLetter);
		// 	} else if (playerGuess !== correctLetter) {
		// 	console.log("incorrect guess")
		// 	}
		// }
			//should match object keys to current guess
			//can't read mapArray in for loop for some reason
			//replace this with a index of function to get the index value to pass to the correct word array
			
			// //need to compare against a word array equal to the current word
			// for (var k = 0, j = 0; k < currentWordArray.length; k++ ,j=uniqueGuessesKeys.length-1) {
				
			// 	var  playerGuess = uniqueGuessesKeys[];
			// 	var correctLetter = gameObject.currentWordArray[k];
			// 	var idx = currentWordArray.indexOf(currentWordArray[turn]);
			// 	if (playerGuess === correctLetter) {
			// 		console.log("correct guess");  
			// 		//**** .join() function to display the guess 
			// 		//document.getElementById("neighborhood-name").innerHTML = wordBankArray[0].word[k];
			// 	} else if (playerGuess !== correctLetter) {
			// 		guesses--;
			// 		document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
			// 	}
			// }
		
	}

}





//other events
	//guessLeft--
	//wins++ and alert
	//losses++ and alert
	//new word function