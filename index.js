let Questions = [
	{
		question: "Ali Age ?",
		answers: [25, 27, 29, 31],
		correctAnswer: 31,
	},
	{
		question: "Second Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "a",
	},
	{
		question: "Third Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Forth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "a",
	},
	{
		question: "Fifth Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Sixth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "a",
	},
	{
		question: "Seventh Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Eighth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "a",
	},
	{
		question: "Ninth Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Tenth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "a",
	},
];
let leaderboredBasic = [
	{
		username: "Hassan",
		score: 0,
	},
];

//set localstorageData
localStorage.getItem("data") ||
	localStorage.setItem("data", JSON.stringify(Questions));

localStorage.getItem("leaderbored") ||
	localStorage.setItem("leaderbored", JSON.stringify(leaderboredBasic));

//get data :)

data = JSON.parse(localStorage.getItem("data"));
leaderbored = JSON.parse(localStorage.getItem("leaderbored"));

//variables :)
const nextButton = document.getElementById("next");
nextButton.style.visibility = "hidden";
const questionDiv = document.getElementById("question");
const answers = document.querySelectorAll("#answers button");
const startGameButton = document.getElementById("startGameButton");
const userNameForm = document.getElementById("enterNameForm");
const goButton = document.getElementById("goButton");
const inputUserName = document.getElementById("inputUserName");
const userNameList = document.getElementById("userNameList");
const closeButton = document.getElementById("closeButton");
const userAnswers = [];
const questionCounter = document.getElementById("questionCounter");
const calculateScore = (userAnswers) => {
	return data.filter((item, index) => {
		return item.correctAnswer === userAnswers[index];
	}).length;
};

//leaderBored
const isNameExist = () => {
	let arr = leaderbored.filter(
		(x) => x.username === localStorage.getItem("userName")
	);
	let indexOfUserName = leaderbored.indexOf(arr[0]);

	return arr.length > 0 && indexOfUserName;
};

const fillQuestions = (index) => {
	nextButton.innerText = "Next";
	questionCounter.innerText = `${index + 1}/${data.length}`;
	questionDiv.innerText = data[index].question;
	answers.forEach((answerButton) => {
		answerButton.innerText = data[index].answers[+answerButton.id];
	});
};

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

//show leaderBored :-
const toggleLeaderBored = () => {
	style = document.getElementById("results").style.display;
	if (style === "none" || style === "") {
		document.getElementById("results").style.display = "block";
	} else {
		document.getElementById("results").style.display = "none";
	}

	document.querySelectorAll(".scores").forEach((node) => node.remove());
	leaderbored.forEach((user) => {
		userNameList.appendChild(createLeadBoredDiv(user));
	});
};

const createLeadBoredDiv = (user) => {
	scoresDiv = document.createElement("div");
	scoresDiv.classList = "scores";
	scoresDiv.innerHTML =
		`<div class='leaderboardName'>${user.username}</div>` +
		`<div class='leaderboardScore'>${user.score}</div></div>`;
	return scoresDiv;
};

const moveToLeaderBoredLocation = () => {
	location.href = "#";
	toggleLeaderBored();
};

const checkUserName = () => {
	if (localStorage.getItem("userName")) {
		location.href = "#questionSection";
	} else {
		startGameButton.click();
	}
};

//disabled buttons after answer

const restButtonShape = (answerButtons) => {
	answerButtons.forEach((answer) => {
		answer.style.background = "";
		answer.disabled = false;
	});
};

const restQuestions = () => {
	fillQuestions(0);
	restQuestionsAndAnswers();
};
//Make next button and enabled buttons after next
const restQuestionsAndAnswers = () => {
	answers.forEach(
		(answer) =>
			(answer.onclick = () => {
				userAnswers.push(answer.innerText);
				answer.style.background = "rgba(6, 230, 6, 0.4)";
				answers.forEach((answer) => (answer.disabled = true));
				nextButton.style.visibility = "visible";
			})
	);
	let index = 1;
	nextButton.onclick = () => {
		if (index == 9) {
			nextButton.innerText = "Show Result";
		}
		if (index >= 10) {
			addScoreToLeaderBored(calculateScore(userAnswers));
			moveToLeaderBoredLocation();
			restButtonShape(answers);
			restQuestions();
			return;
		}
		fillQuestions(index);
		restButtonShape(answers);
		nextButton.style.visibility = "hidden";
		index++;
	};
};

startGameButton.onclick = () => {
	userNameForm.style.visibility = "visible";
};

goButton.onclick = () => {
	inputUserName.value &&
		((location.href = "#questionSection"),
		(userNameForm.style.visibility = "hidden"),
		localStorage.setItem("userName", inputUserName.value));
};

// create leaderbored :)
restQuestions();
document.getElementById("LeaderboardButton").onclick = toggleLeaderBored;
document.getElementById("closeButton").onclick = toggleLeaderBored;
