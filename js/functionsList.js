//crate Radom Questions - get data from localstorage then make sort randomly
//return array of 10 elements
const createRandomQuestions = () => {
	let AllQuestionsRandom = JSON.parse(localStorage.getItem("data")).sort(
		() => 0.5 - Math.random()
	);
	return AllQuestionsRandom.slice(0, 10);
};

//calculate user score based on his answers
//just return the length of truthy values
const calculateScore = (userAnswers) => {
	return data.filter((item, index) => {
		return item.correctAnswer === userAnswers[index];
	}).length;
};

//check if the user name is exited in leaderbored - if true : return index of this user in leaderBored - if false: return false based on length > 0
const isNameExist = () => {
	let arr = leaderbored.filter(
		(x) => x.username === localStorage.getItem("userName")
	);
	let indexOfUserName = leaderbored.indexOf(arr[0]);

	return arr.length > 0 && indexOfUserName;
};

//fill questions div with questions form data and also answers
/* 
this function need buttons id - to get answer data
change next buttons with next text
change questions counter 
 */
const fillQuestions = (index) => {
	questionCounter.innerText = `${index + 1}/${data.length}`;
	questionDiv.innerText = data[index].question;
	answers.forEach((answerButton) => {
		answerButton.innerText = data[index].answers[+answerButton.id];
	});
};
//Add Score to Leader Bored based on user name
/* 
check is name is exist based on isNameExist and then if 
-true : modify leaderbored with user object ,
-false : just push the user object in leaderbored.
-- add leaderbored data to localstorage
-- remove the current user name form localstorage
*/
const addScoreToLeaderBored = (result) => {
	let isNameExitValue = isNameExist();

	if (isNameExitValue > 0 || isNameExitValue === 0) {
		leaderbored[isNameExitValue] = {
			username: localStorage.getItem("userName"),
			score: result,
		};
	} else {
		leaderbored.push({
			username: localStorage.getItem("userName"),
			score: result,
		});
	}
	localStorage.setItem("leaderbored", JSON.stringify(leaderbored));
	localStorage.removeItem("userName");
};

//Create User Div with user name - user score inside leaderbored
const createLeadBoredDiv = (user) => {
	scoresDiv = document.createElement("div");
	scoresDiv.classList = "scores";
	scoresDiv.innerHTML =
		`<div class='leaderboardName'>${user.username}</div>` +
		`<div class='leaderboardScore'>${user.score}</div></div>`;
	return scoresDiv;
};

//toggle leaderbored display to none - block
//remove the current leaderbored and make new one
//sort leaderbored items DEC based on score


//move to leader bored location in the home page - then run toggle leader bored
const moveToLeaderBoredLocation = () => {
	location.href = "#";
	toggleLeaderBored();
};

//this for links - to check is user name is entered - it's run start Game button
const checkUserName = () => {
	if (localStorage.getItem("userName")) {
		location.href = "#questionSection";
	} else {
		startGameButton.click();
	}
};

//Rest Button Shape to be without background - and change disabled to false
const restButtonShape = (answerButtons) => {
	answerButtons.forEach((answer) => {
		answer.style.background = "";
		answer.disabled = false;
	});
};

//Main Rest Questions - fill first question - and rest all questions and answers
const showQuestions = () => {
	fillQuestions(0);
	restQuestionsAndAnswers();
};

//Make next button and enabled buttons after next
const restQuestionsAndAnswers = () => {
	//Add onClick listener to answers to do this
	/*
  -- Push user answers to separate array
	-- change the style of current answer
	-- disabled all other answers
  -- show next button
  */
	answers.forEach(
		(answer) =>
			(answer.onclick = () => {
				userAnswers.push(answer.innerText);
				answer.style.background = "rgba(6, 230, 6, 0.4)";
				answers.forEach((answer) => (answer.disabled = true));
				nextButton.style.visibility = "visible";
			})
	);

	//Add onClick listener to next Button to do this
	/*
      --fill question based on question no
      --rest answer shape to the normal start "background-disabled"
      --hide next button
    when index reach 9:
      --change next button to be Show Result
    when index reach 10:
      --calculate the user score
      --scroll the page to the home and show the leaderbored
      --rest all answers shape to normal state
      --clear user Answer
      --create new random data

  */
	let index = 1;
	nextButton.onclick = () => {
		nextButton.innerText = "Next";
		if (index >= 9) {
			nextButton.innerText = "Show Result";
		}
		if (index >= 10) {
			moveToLeaderBoredLocation();
			addScoreToLeaderBored(calculateScore(userAnswers));
			return;
		}
		fillQuestions(index);
		restButtonShape(answers);
		nextButton.style.visibility = "hidden";
		index++;
	};
};

/*
this function rest button shape to normal state
show all questions
clear userAnswers
create random data
*/
const setEveryThingClean = () => {
	data = createRandomQuestions();
	restButtonShape(answers);
	nextButton.style.visibility = "hidden";
	nextButton.innerText = "Next";
	showQuestions();
	userAnswers = [];
};

// Add onclick to :-
/*
--start Game button : just change the visibilty to user name form
--go Button : change page location to questions - add user name to localstorage -              reset every thing th starter state
--Leaderboard Button : just turn on/off the leaderbored div
close Button : just close the leaderbored div
 */

const onClickListener = () => {
	startGameButton.onclick = () => {
		userNameForm.style.visibility = "visible";
	};

	goButton.onclick = () => {
		inputUserName.value &&
			(setEveryThingClean(),
			(location.href = "#questionSection"),
			(userNameForm.style.visibility = "hidden"),
			localStorage.setItem("userName", inputUserName.value));
	};

	LeaderboardButton.onclick = toggleLeaderBored;
	closeButton.onclick = toggleLeaderBored;
};
