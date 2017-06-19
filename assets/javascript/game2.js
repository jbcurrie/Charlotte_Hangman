//**rewrite the split word function to display the dashes in the mapped array
//**this should allow me to match the index location of the dash when a word is correctly guessed
//use wordArray to match every case for a correct guess
//

var winsCounter=0;//counts total words correctly guessed
var lossesCounter=0//counts total words incorrectly guessed (after guesses runs out)
//var newObject = {wordToGuess: [split word], playerToGuessArray: [], spaces: "", dash, wordBankArray: {{region: "", hint: "", word: "", image: ""}}, splitWord: function()}
var wordBankArray = [//wordbank holds all words for the game, image, etc
						{region: "South Charlotte", 
						hint: "located along Pineville-Matthews Road", 
						word: "THE ARBORETUM", 
						image: "assets/images/South.jpg",
							splitWord: function() {
								var wordArray= this.word.split("");//split the current word into an array
								//could map dashes to mapArray (JC)
								//use Array.fill() to fill new array with dashes for length of wordArray
								var mapArray = wordArray.map(function(x) {return x});
								var spaces = " ";//creates a space instead of a dash
								var dash = "_ ";//creates  dash to replace the letter of the current word
									for (var j = 0; j < wordArray.length; j++) {
										wordArray[j].toUpperCase();//lowercase all letters of the current word
										if (wordArray[j] !== spaces) {//if the letter is not a space
								    	console.log("Show me! " + wordArray[j]);

								    	wordArray[j] = dash;//turn the letter into a dash
								    	console.log(wordArray[j]);
								    	document.getElementById("neighborhood-name").innerHTML += dash;//send dashes to DOM on the same line
								    	} else {//if statement false and there are spaces...
								    	console.log("spaces working");
								    	document.getElementById("neighborhood-name").innerHTML += '&nbsp;&nbsp;'; //add non breaking spaces to the DOM
								    	};
								    };
								document.getElementById("hint").innerHTML = "<p> Hint: " + this.hint + "</p>";
								document.getElementById("region").innerHTML = "<p> Region: " + this.region + "</p>";
								document.getElementById("current-photo").src = this.image;
							}//,
							// cloneWord: function () {
							// 	var clone = this.word.split("");
							// }
						}, 
						{region: "South Charlotte", 
						hint: "A newer upscale area, along the NC/SC border, with an eponymously titled resort", 
						word: "BALLANTYNE", 
						image: "assets/images/South.jpg",
							splitWord: function() {
								var wordArray= this.word.split("");//split the current word into an array
								var mapArray = wordArray.map(function(x) {return x});
								var spaces = " ";//creates a space instead of a dash
								var dash = "_ ";//creates  dash to replace the letter of the current word									
									for (var j = 0; j < wordArray.length; j++) {
										wordArray[j].toUpperCase();//lowercase all letters of the current word
										if (wordArray[j] !== spaces) {//if the letter is not a space
								    	console.log("Show me! " + wordArray[j]);

								    	wordArray[j] = dash;//turn the letter into a dash
								    	console.log(wordArray[j]);
								    	document.getElementById("neighborhood-name").innerHTML += dash;//send dashes to DOM on the same line
								    	} else {//if statement false and there are spaces...
								    	console.log("spaces working");
								    	document.getElementById("neighborhood-name").innerHTML += '&nbsp;&nbsp;'; //add non breaking spaces to the DOM
								    	};
								    };
								document.getElementById("hint").innerHTML = "<p> Hint: " + this.hint + "</p>";
								document.getElementById("region").innerHTML = "<p> Region: " + this.region + "</p>";
								document.getElementById("current-photo").src = this.image;
							}//,
							// cloneWord: function () {
							// 	var clone = this.word.split("");
							// }

						},
						{region: "West Charlotte", 
						hint: "In west Charlotte along Beatties Ford Rd, is a historically African-American neighborhood surrounding Johnson C. Smith University", 
						word: "BIDDLEVILLE", 
						image: "assets/images/West.jpg",
							splitWord: function() {
								var wordArray= this.word.split("");//split the current word into an array
								var mapArray = wordArray.map(function(x) {return x});
								var spaces = " ";//creates a space instead of a dash
								var dash = "_ ";//creates  dash to replace the letter of the current word
									for (var j = 0; j < wordArray.length; j++) {
										wordArray[j].toUpperCase();//lowercase all letters of the current word
										if (wordArray[j] !== spaces) {//if the letter is not a space
								    	console.log("Show me! " + wordArray[j]);

								    	wordArray[j] = dash;//turn the letter into a dash
								    	console.log(wordArray[j]);
								    	document.getElementById("neighborhood-name").innerHTML += dash;//send dashes to DOM on the same line
								    	} else {//if statement false and there are spaces...
								    	console.log("spaces working");
								    	document.getElementById("neighborhood-name").innerHTML += '&nbsp;&nbsp;'; //add non breaking spaces to the DOM
								    	};
								    };
								document.getElementById("hint").innerHTML = "<p> Hint: " + this.hint + "</p>";
								document.getElementById("region").innerHTML = "<p> Region: " + this.region + "</p>";
								document.getElementById("current-photo").src = this.image;
							}//,
							// cloneWord: function () {
							// 	var clone = this.word.split("");
							// }
						},
						{region: "Center City", 
						hint: "Center-city ward; today, home to a sizable mixed-income housing area.", 
						word: "FIRST WARD", 
						image: "assets/images/Center.jpg",
							splitWord: function() {
								var wordArray= this.word.split("");//split the current word into an array
								var mapArray = wordArray.map(function(x) {return x});
								var spaces = " ";//creates a space instead of a dash
								var dash = "_ ";//creates  dash to replace the letter of the current word
									for (var j = 0; j < wordArray.length; j++) {
										wordArray[j].toUpperCase();//lowercase all letters of the current word
										if (wordArray[j] !== spaces) {//if the letter is not a space
								    	console.log("Show me! " + wordArray[j]);

								    	wordArray[j] = dash;//turn the letter into a dash
								    	console.log(wordArray[j]);
								    	document.getElementById("neighborhood-name").innerHTML += dash;//send dashes to DOM on the same line
								    	} else {//if statement false and there are spaces...
								    	console.log("spaces working");
								    	document.getElementById("neighborhood-name").innerHTML += '&nbsp;&nbsp;'; //add non breaking spaces to the DOM
								    	};
								    };
								document.getElementById("hint").innerHTML = "<p> Hint: " + this.hint + "</p>";
								document.getElementById("region").innerHTML = "<p> Region: " + this.region + "</p>";
								document.getElementById("current-photo").src = this.image;
							}//,
							// cloneWord: function () {
							// 	var clone = this.word.split("");
							// }
						},						
					];
var guessesBank = [];
var guessCounter=12;//counts total guesses left

//the hangmanWord function splits the word into an array, stored under a variable. 
//hangmanWord function replaces each letter with a dash; if the array element is a space, it remains a space
//may cause an issue if i have to create functions that match the current word. if hangman word only calls the first index, how will it know if i've already shown first index in the game?	
	function hangmanWord () {
		wordBankArray[0].splitWord();
		//wordBankArray[0].cloneWord();
		//console.log(wordBankArray[0].clone);	
	}

	function shuffle(array) { //uses fisher yates to shuffle words https://bost.ocks.org/mike/shuffle/
	  var currentIndex = wordBankArray.length, temporaryValue, randomIndex; //https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = wordBankArray[currentIndex];
	    wordBankArray[currentIndex] = wordBankArray[randomIndex];
	    wordBankArray[randomIndex] = temporaryValue;
	  }
	  return array;
	}

	var arr = wordBankArray["word"];//somehow shows a random wordBankArray object each time i refresh the page
	arr = shuffle(arr);
	console.log(arr);


document.onkeyup = function(event) {
		//guess the word
		//user guesses word in hangman field
		//use event key to log user guesses
		//print user guesses to the DOM in an array
		//de-duplicate guesses
		//match user guesses to the original word
		//set counters to decrement guess, increment wins or losses depending on limits
		//if a win is logged, show next word
		//if a loss is logged, show next word
		var uniqueGuesses = {};
	//key code for a = 65 key code for z = 90
		var alphabet =["a",
						"b",
						"c",
						"d",
						"e",
						"f",
						"g",
						"h",
						"i",
						"j",
						"k",
						"l",
						"m",
						"n",
						"o",
						"p",
						"q",
						"r",
						"s",
						"t",
						"u",
						"v",
						"w",
						"x",
						"y",
						"z"];
		var userGuess = event.keyCode || event.which;
	//if (guessCounter < 12) {		
		if (userGuess > 64 && userGuess < 91) {
			var guesses = String.fromCharCode(userGuess);
			guessesBank.push(guesses);//logs all valid key codes to guesses Array
			for (var i = 0; i < guessesBank.length; i++) {//https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
				uniqueGuesses[guessesBank[i]] = 1 + (uniqueGuesses[guessesBank[i]] || 0);//logs unique object name for each guess
			} 
		} else {
				console.log("not a letter");
			};
		console.log(uniqueGuesses);
		console.log(Object.keys(uniqueGuesses));
		var uniqueGuessesKeys = Object.keys(uniqueGuesses);//stores object keys to their own array
			var k;
			var j;
			//should match object keys to current guess
			//can't read mapArray in for loop for some reason
			// replace this with a index of function to get the index value to pass to the correct word array
			for (var k = 0, j = 0; k < wordBankArray[0].word.length; k++ ,j=uniqueGuessesKeys.length-1) {
				var  playerGuess = uniqueGuessesKeys[j];
				var correctLetter = wordBankArray[0].word[k];
				if (playerGuess === correctLetter) {
					console.log("correct guess");  
					//**** .join() function to display the guess 
					//document.getElementById("neighborhood-name").innerHTML = wordBankArray[0].word[k];
				}
			}
			//rewrite the for loop and use the index of word to for each replace the correct guess

		
		//*****hides the object key if you don't select an actual letter, but then pops up again if you select a letter
		document.getElementById("guesses").innerHTML = "<p> guesses: " + uniqueGuessesKeys + "</p>";
	//}
	//this is the array that stores the current word - wordBankArray[0]
}

var boogie = booger(boogie);
var x = 0;
var y = "";
var z = 0;

function booger(arr) {
	x = 3;
	y = "booger"
	z = 4;
	var arr = []
	arr.push(x,y,z);
	return arr;
}

function bogie() {
	console.log(boogie);
}

bogie();
                              

//display original word
//update all counters
//add music and noises
//style the document