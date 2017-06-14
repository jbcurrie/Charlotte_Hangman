var alphabet =["a","b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];//this array will be the array of availble letters when event key function is used. if letter matches word array, remove letter from this array; then add letter to guess array and decrement guess counter, else do nothing.
var randomWords = {}; //20 random words from the list of 89 stored as arrays. each letter has an index. if the user event key matches the index for a letter in the current word array, then the match triggers the alphabet function and also populates the hangman function/array;
var guessesBank = [];//array stores guesses and list them on the page
var guessCounter=12;//counts total guesses left
var winsCounter=0;//counts total words correctly guessed
var lossesCounter=0//counts total words incorrectly guessed (after guesses runs out)
var hangman = [];//array populates as player matches random word from the array
//var word ="Plaza Midwood";
var change;
var userGuesses;
//var lowerWord = wordBank.word.toLowerCase();
var i;
var spaces = " ";
var wordBankArray = [//wordbank holds all words for the game, image, etc
						{region: "South Charlotte", 
						hint: "located along Pineville-Matthews Road", 
						word: "The Arboretum", 
						image: "assets/images/South.jpg",
						lowerWord: function () {
							word.toLowerCase();
						}
						}, 
						{region: "South Charlotte", 
						hint: "A newer upscale area, along the NC/SC border, with an eponymously titled resort", 
						word: "Ballantyne", 
						image: "assets/images/South.jpg",
						lowerWord: function () {
							word.toLowerCase();
						}
						}
					];


function myFunction () {
	var res= wordBankArray[0].word.split("");//splits word into an array. you can iterate this with a for statement to run through the list.
	//document.getElementById("neighborhood-name").innerHTML = res;
    console.log(res);//where can i make the characters one case so that guesses log correctly? do i upper case the first character after a space after it's guessed? or just replace the original character? 
    lwLength = res.length;
    dash = "_ ";
    for (var i = 0; i < lwLength; i++) {
    	//If statement true...
    	if (res[i] != spaces) { //use the word array to replace each letter with a dash
	    	console.log("Show me! " + res[i]);
	    	res[i] = dash;
	    	console.log(res[i]);
	    	document.getElementById("neighborhood-name").innerHTML += dash;//replace dash with res[i]
	    }
	    else {//if statement false and there are spaces...
	    	console.log("spaces working");
	    	document.getElementById("neighborhood-name").innerHTML += '&nbsp;&nbsp;'; //add non breaking spaces to the DOM
	    } 
    } 
 
    	document.onkeyup = function(event) {//logs user guesses and updates the guessesBank and user scores
		if (guessCounter > 0) {
			var userGuess = event.key;
			//for (var i = 0; i < guessesBank.length; i++) {
				//console.log(guessesBank.length);
				//if (guessesBank[i] !== userGuess) {
					//console.log(userGuess + "is a new letter");

								//only count down if a letter is incorrect and  is not yet typed
				//} else {
					//console.log(userGuess + "is the same letter");
				//}
			//}
			
			guessesBank.push(userGuess);
			console.log(guessesBank);
			guessCounter--;
			var html = "<p>Type the letter of your first guess!</p>" + 
					"<p>Guesses Left: " + guessCounter + "</p>" + 
					"<p>Guesses:" + guessesBank + "</p>" + 
					"<p>Wins:" + winsCounter + "</p>" +
					"<p>Losses:" + lossesCounter + "</p>";
			document.getElementById("guesses").innerHTML = html
			
			if (userGuess == wordBankArray[0].word[0]) {
				console.log("matches"); 
				document.getElementById("neighborhood-name").innerHTML = res.fill(wordBankArray[0].word[0],0,1); 
				//should i push user guess or the orignal letter?
			} 
				//match letter to word array. display letter in place of dash if a match for EVERY case
				

			
				
				//need to check before logging to guesses bankwill always be true since userGuess will always log to the guessBank
				
				
				//for each guessesBank 
				//if userGuess matches the value and type of element, do not add it to the bank

				//for each element in the guessesBank array, check if it is equal to an element in the wordBankArray
				

			
			//else {
				//losses++;
				//return confirm("game over! try again?");
				//if (confirm() == true) {
					//var guessCounter+=12;
				//} else {
					//alert("maybe next time!");
				//}
			//}//if okay pressed for 'try again' reset the guess counter; else do nothing

		//turn the word into an array


	//should i document write the dashes in the same function that document writes the guesses? 
	//should i write a function that matches user guesses to the array created in the word bank function? 
		//or can i just as easily create another array from the current word, and have the guesses match that? 
	//event key logged, if event key is not equal to a previous event key, add to bank


		};
	};
};



 	




//create the word bank - import the array of neighborhoods
// reference the word bank  - change the word function to take input from property called word, stored in an object, stored in an array.
//create a function that displays a random word from the neighborhoods array. 
//document write the hint, region title, and neighborhood image
//create a function to match user guesses to the word array
//create a condition to stop guesses when guesses counter = 0, game over
//create a condition to flash 'you win' if all 20 words are solved;



//VARIABLES needed
//var neighborhoods {} - all neighborhoods are stored as objects in an array.
//identify functions needed for each aspect of game

//how correct word appears
	//event, press space bar
	//function runs to populate neighborhood from an object field; 20 random objects from array.
	//would need to create an index for random neighborhoods selected/remaining.
	//image shows, hint shows, and blank spaces corresponding to word show on html. 
		//document query to replace the current image/text with the object text
		//additional document query replaces length of word with corresponding "_ _ _" characters

//how users guess
	//neighborhood names stored in array
	//You can access arrays and their properties from an object (gandalf the grey)
	//Split neighborhood string (based on index) into an array - https://www.w3schools.com/jsref/jsref_split.asp
	//run function to match array value to onkeyup function event - mdn array article
	//decrement correct guesses from available letters array - uses array property
	//decrement guesses from counter
	//upon correct guess/match, increment score, and populate hangman string/array. If an array, it would need to fill the correct index position from the orignal string/array.
	//once guesses = 0, flash game over on onkeyup function; at 20 guesses, you win (optional: level up).

