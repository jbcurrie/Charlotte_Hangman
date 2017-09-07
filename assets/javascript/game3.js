//Global Variables
//this will increase when wins or losses change
//TO DO: store all global vars in functions to improve modularity
//front end redesign for more mobile compatibility
var turn = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 12
var userGuess = "";
var uniqueGuesses = {};
var myAudio = document.getElementById('myAudio');
var stopTime = 0;

var gameObject = {
	gameWordsFunction : function () {
		for (var i in gameObject.wordBankObject) {
			gameObject.gameWords.push(gameObject.wordBankObject[i].word);
		}
		return gameObject.gameWords;
	},
	shuffleWords : function (array) {
		var i = gameObject.gameWords.length;
		var j = 0;
		var temp = [];

		while (i--) {
			j = Math.floor(Math.random() * (i+1));
			temp = array[i];
			array[i] = array [j];
			array[j] = temp;
		}
		return array;
	}, 
	getCurrentWord : function () {		
		var currentWord = [];
		var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
		currentWord.push(gameObject.gameWords[idx]);
		var currentWordString = currentWord.toString();
		gameObject.currentWordArray = currentWordString.split("");
		//console.log(gameObject.currentWordArray);
		for (i in gameObject.wordBankObject) {

		 	if (currentWordString === gameObject.wordBankObject[i].word) {
		 		document.getElementById("region").innerHTML = gameObject.wordBankObject[i].region;
		 		document.getElementById("hint").innerHTML =  gameObject.wordBankObject[i].description;
		 		document.getElementById("current-photo").src = gameObject.wordBankObject[i].image;
		 	}
		 };
		return gameObject.currentWordArray;
	},
	getDashes : function () {
		var spaces = " ";
		var dash = "_";
		var dashWord = [];
		var idx = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
		dashWord.push(gameObject.gameWords[idx]);
		var dashWordString = dashWord.toString();
		gameObject.dashArray = dashWordString.split("");
		for (i in gameObject.dashArray) {
		 	if (gameObject.dashArray[i] !== spaces) {
		 		gameObject.dashArray[i] = dash;
		 	} else if (gameObject.dashArray[i] === spaces) {
		 		gameObject.dashArray[i] = spaces;
		 	}
		}
		//console.log(gameObject.dashArray);
		document.getElementById("neighborhood-name").innerHTML = gameObject.dashArray.join('&nbsp;&nbsp;');
	},
	gameWords : [],
	currentWordArray : [],
	dashArray : [],
	wordBankObject : [
						{region: "South Charlotte", 
						 description: "Located along Pineville-Matthews Road,  the general area of Charlotte which surrounds the mixed-use shopping center of the same name, apartment community, office complex and medical park which opened in 1989. The shopping center is home to Charlotte's first Wal-Mart store, and the area's name comes from the abundance of trees in the area.", 
					     word: "THE ARBORETUM", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A newer upscale area, along the NC/SC border, with it's own luxury resort; originally a large hunting tract owned by the Harris family, descendants of former North Carolina Governor Cameron A. Morrison.", 
					     word: "BALLANTYNE", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "Centered on the intersection of Ardrey Kell and Rea roads, located in between the Arboretum and Ballantyne neighborhoods.", 
					     word: "BLAKENEY", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A small neighborhood along South Kings Drive and East 4th Street between the Elizabeth and Myers Park neighborhoods; among the oldest surviving black residential areas of Charlotte; according to local tradition, it was built as a servants' community for the adjoining streetcar suburb of Myers Park, which began to develop in 1912.", 
					     word: "CHERRY", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "Centered on the intersection of Randolph and Sharon Amity roads, most likely taking its name from the large shopping center,which was one of Charlotte's first suburban malls.", 
					     word: "COTSWOLD", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A historic streetcar suburb of largely craftsman-style bungalows located directly South of uptown.", 
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
						 description: "A wealthy master-planned neighborhood from the early 20th century characterized by its curving streets and mature oaks.", 
					     word: "MYERS PARK", 
						 image: "assets/images/South.jpg"},
						{region: "South Charlotte", 
						 description: "A small edge city centered on the intersection of Sharon Road and Fairview Road. It includes the nearby neighborhoods of Morrocroft and Foxcroft. Its name is derived from its upscale mall, which opened on February 12, 1970. ", 
					     word: "SOUTHPARK", 
						 image: "assets/images/South.jpg"},
						{region: "West Charlotte", 
						 description: "A neighborhood located in the extreme west bordering Gaston County near the Charlotte-Douglas International Airport.", 
					     word: "BERRYHILL", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "In west Charlotte along Beatties Ford Rd, is a historically African-American neighborhood surrounding Johnson C. Smith University.", 
					     word: "BIDDLEVILLE", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "Historic area between Wilkinson Blvd, Freedom Drive, W Morehead St, and Ashley Rd. This includes parts of Ashley Park; was a United States Army facility in Charlotte, North Carolina, United States during the early 20th century.", 
					     word: "CAMP GREENE", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "A Tank town, located in western Mecklenburg County bordering Gaston County; derives its name from the small creek bearing the same name.", 
					     word: "PAW CREEK", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "A historic streetcar suburb north of Biddleville named in honor of a revered African-American educator.", 
					     word: "WASHINGTON HEIGHTS", 
						 image: "assets/images/West.jpg"},
						{region: "West Charlotte", 
						 description: "An original streetcar suburb mainly developed in 1920's by E.C. Griffith. It is a historically registered neighborhood adjacent to uptown Charlotte.", 
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
						 description: "The portion of Charlotte in the extreme northeast around UNC Charlotte; home to a large research park, a university, PNC Music Pavillion, and IKEA.", 
					     word: "UNIVERSITY CITY", 
						 image: "assets/images/North.jpg"},
						{region: "East Charlotte", 
						 description: "Area is named after the former mall that was demolished in the 2014; site of the Charlotte Open Air Market.", 
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
						 description: "Ward, formerly known as Brooklyn, was a traditionally African-American neighborhood that was converted in the mid-twentieth century into a city and county government office center as part of an urban renewal policy. ", 
					     word: "SECOND WARD", 
						 image: "assets/images/Center.jpg"},
						{region: "Center City", 
						 description: "Ward known chiefly as the home of the Carolina Panthers who play at Bank of America Stadium.", 
					     word: "THIRD WARD", 
						 image: "assets/images/Center.jpg"},
						{region: "Center City", 
						 description: "Parts of this ward fall within a registered historic district; one of the few neighborhoods of single-family homes left within the I-277 loop.", 
					     word: "FOURTH WARD", 
						 image: "assets/images/Center.jpg"} 
						 ]
}


function start (bool,correctWord) {
	//console.log(gameObject);
	if (turn === 0) {
		gameObject.gameWordsFunction();
	}
	gameObject.getCurrentWord();
	gameObject.getDashes();
	uniqueGuesses = {};
	userGuess = "";
	uniqueGuessesKeys = [];
	guessesLeft = 12;
	document.getElementById("turn").innerHTML = `Round: ${turn}/27`;
	document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("neighborhood-name").innerHTML = gameObject.dashArray.join('&nbsp;&nbsp;');
	document.getElementById("neighborhood-name").style.fontWeight="bolder";
	document.getElementById("guesses").innerHTML = "Guesses: ";
	document.getElementById("guesses").style.fontFamily = "inherit";
	document.getElementById("guesses").style.fontWeight="bold";
	document.querySelector("body").style.backgroundImage="url(assets/images/Charlotte_background.png)";
	document.querySelector("h1").style.backgroundColor="#1D1160";
	document.getElementById("msgField").style.color = "#ffffff";
	document.getElementById("guesses-left").style.color = "#ffffff";
	//if bool is win show win message, loss, end of game with option to play again. 
	//document create  temp message that clears on button click
	if (bool === true) {
		document.getElementById("msgField").innerHTML = `Correct! ${correctWord}.`;
	} else if (bool === false) {
		document.getElementById("msgField").innerHTML = `You lost that round! The correct answer was ${correctWord}.`;
	} else {
		if (turn < 27) {
			document.getElementById("msgField").innerHTML = `Type the letter of your next guess.`;	
		} else if (turn = 27) {
			document.getElementById("msgField").innerHTML = `You really know Charlotte! Play again? Press any key to continue`;
			document.getElementById("msgField").style.color = "#1D1160";
			turn=0;
			wins=0;
			losses=0;
			gameObject.shuffleWords(gameObject.gameWords);
			gameObject.getCurrentWord();
			gameObject.getDashes();
		}
	}
};

function guessMatch(userGuess) {
	var guessesBank = [];
	var validGuess = false;
	//if the key passes the regex test, push it to the bank else, type another letter
	var patt = /^[a-zA-Z]+/;
	var test = patt.test(userGuess);
	// console.log(`${userGuess} is ${test}`)
	if (test === true) {
		document.getElementById("error").innerHTML = "";
		guessesBank.push(userGuess);//logs all valid key codes to guesses Array
		//https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
		for (var k = 0; k < guessesBank.length; k++) {
			//literally says 1 equals 1 in the console log (or just 1)
			uniqueGuesses[guessesBank[k]] = 1 + (uniqueGuesses[guessesBank[k]] || 0);//logs unique object name for each guess
			validGuess = true;
		} 	
	} else if (test === false) {
		document.getElementById("error").innerHTML = "Type another letter to continue!";
	} else {
		// console.log("something went awry");
	}
	var uniqueGuessesKeys = Object.keys(uniqueGuesses);	
	document.getElementById("guesses").innerHTML = "Guesses: " + uniqueGuessesKeys.join('&nbsp;&nbsp;');
	//console.log(uniqueGuessesKeys);

	var letterInWord = false; 
		for (var i = 0; i < gameObject.dashArray.length; i++) {
			if (gameObject.currentWordArray[i] === userGuess) {
				letterInWord = true;
				//console.log(userGuess + " is a match, shows " + letterInWord);
			}
		}
		if (letterInWord) {
			for (var j = 0; j < gameObject.dashArray.length; j++) {
				if (gameObject.currentWordArray[j] === userGuess && guessesLeft > 0) {
					gameObject.dashArray[j] = userGuess;
				}
			}
		//	console.log(gameObject.dashArray);
		} else if (validGuess && uniqueGuesses[userGuess] <= 1 && letterInWord === false) {
	
			return guessesLeft--;
		};
	
	//console.log(uniqueGuessesKeys);
	document.getElementById("neighborhood-name").innerHTML = gameObject.dashArray.join('&nbsp;&nbsp;');	
}

//eachRound function
	function roundTracker () {
		var bool;
		var correctWordArr = gameObject.currentWordArray.toString();
		var correctWord = gameObject.currentWordArray.join('');
		document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		//if dash array string matches current word string, wins ++
		if (guessesLeft < 6) {
			document.getElementById("guesses-left").style.color = "#ff0000";
		}
		if (gameObject.dashArray.toString() === correctWordArr) {
			wins++;
			myAudio.play();
		//	console.log("player wins");
			turn++;
			bool = true;
			start(bool,correctWord);
		} else if (guessesLeft < 1) {
			losses++;
			bool = false;
			turn++;
			start(bool,correctWord);
		}
		if (turn === 27) {
			bool = null;
			start(bool,correctWord);
		}
	}

//-------------------------------
//start game
//when document is loaded run the following functions:
window.onload = start();

gameObject.shuffleWords(gameObject.gameWords);
//shuffle words once so you can't repeat them
	//document key up
	document.getElementById("mobile").addEventListener("input", function(event) { 
		myAudio.pause();
		userGuess = event.data.toUpperCase();
		// console.log(event);
		// console.log(event.data);
		guessMatch(userGuess);
		roundTracker();
		document.getElementById("mobile").value = "";
	});
	// document.getElementById("mobile").addEventListener("keyup", function(event) {
	// //document.getElementById("mobile").onkeypress = function(event) {
	// 	userGuess = String.fromCharCode(event.keyCode || event.which || event.charCode).toUpperCase();
	// });
