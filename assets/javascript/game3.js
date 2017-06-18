var gameObject = {
	gameWords : [],
	gameWordsFunction : function () {
		for (var i in gameObject.wordBankObject) {
			gameObject.gameWords.push(gameObject.wordBankObject[i].word);
		}
		console.log(gameObject.gameWords);
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
		console.log(gameObject.gameWords);
		return array;
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
 function start() {
 	var turn = 0;//this will increase when wins or losses change
 	var wins = 0;
 	var losses = 0;
 	var guesses = 0;
	console.log(gameObject);
	//document.getElementById("neighborhood-name").innerHTML = gameObject.wordBankObject[0].word;
	//gameObject.splitWord();
	gameObject.gameWordsFunction();
	gameObject.shuffleWords(gameObject.gameWords);
	getCurrentWord(gameObject.gameWords);

	 
	function getCurrentWord(arr) {
		spaces = " ";
		dash = "_";
		//hyphen = "-";
		currentWord = [];
		turn;//if works, then remove 0 and place in event function, so that current turn can be mod. 
		 //select one array item at a time based on turn
		var arr = gameObject.gameWords.indexOf(gameObject.gameWords[turn]);
		console.log(gameObject.gameWords[arr]);
		currentWord.push(gameObject.gameWords[arr]);
		console.log(currentWord);
		var currentWordString = currentWord.toString();
		console.log(currentWordString);
		var currentWordArray = currentWordString.split("");
		console.log(currentWordArray);
		for (i in currentWordArray) {
		 	if (currentWordArray[i] !== spaces) {//if the letter is not a space
		 		console.log(true);
		 		currentWordArray[i] = dash;
		 		console.log(currentWordArray);
		 	} else if (currentWordArray[i] === spaces) {
		 		console.log(false);
		 		currentWordArray[i] = spaces;
		 		console.log(currentWordArray);
		 	}
		 }
		 document.getElementById("neighborhood-name").innerHTML = currentWordArray.join('&nbsp;&nbsp;');
		 for (i in gameObject.wordBankObject) {

		 	if (currentWordString === gameObject.wordBankObject[i].word) {
		 		document.getElementById("region").innerHTML = "Region: " + gameObject.wordBankObject[i].region;
		 		document.getElementById("hint").innerHTML = "Hint: " + gameObject.wordBankObject[i].description;
		 		document.getElementById("current-photo").src = gameObject.wordBankObject[i].image;
		 	}
		 }


	};
	//var wordToGuess = gameObject.getCurrentWord(gameObject.gameWords);


	gameWordsDashes = [];
	// gameWordsDashes : function () {

	// },
}


//display text for word
	//run the object function for current word

	//turn it to dashes with the object function
	//display it to the documetn with the object function


//listen for key strokes

	//when key strokes are entered:

	//log guesses to the document
	//playerGuess : [],
	//display correct guesses in place of dashes

//other events
	//guessLeft--
	//wins++ and alert
	//losses++ and alert
	//new word function