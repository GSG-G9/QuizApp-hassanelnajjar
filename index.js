let Questions = [
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum nobis, molestias debitis temporibus eius dolore natus quibusdam minus ratione.",
		answers: [
			"asdsda wdaw dawdwdw aad",
			"bwadwaadwa d",
			"wadawd wadwda",
			"dawdawd wadawf",
		],
		correctAnswer: "a",
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
let leaderboardBasic = [
	{
		username: "Hassan",
		score: 0,
	},
];

//set localstorageData
localStorage.getItem("data") ||
	localStorage.setItem("data", JSON.stringify(Questions));

localStorage.getItem("leaderboard") ||
	localStorage.setItem("leaderboard", JSON.stringify(leaderboardBasic));

//get data :)

data = JSON.parse(localStorage.getItem("data"));
leaderboard = JSON.parse(localStorage.getItem("leaderboard"));

//variables :)
const nextButton = document.getElementById("next");
nextButton.style.visibility = "hidden";
const questionDiv = document.getElementById("question");
const answers = document.querySelectorAll("#answers button");
const startGameButton = document.getElementById("startGameButton");
const userNameForm = document.getElementById("enterNameForm");
const goButton = document.getElementById("goButton");
const inputUserName = document.getElementById("inputUserName");

const LeaderboardButton = document.getElementById("LeaderboardButton");
const userNameList = document.getElementById("userNameList");
const closeButton = document.getElementById("closeButton");

const userAnswers = [];

const calculateScore = (userAnswers) => {
	return data.filter((item, index) => {
		return item.correctAnswer === userAnswers[index];
	}).length;
};

//leaderBored
const isNameExist = () => {
	let arr = leaderboard.filter(
		(x) => x.username === localStorage.getItem("userName")
	);
	let indexOfUserName = leaderboard.indexOf(arr[0]);

	return arr.length > 0 && indexOfUserName;
};

const fillQuestions = (index) => {
	questionDiv.innerText = data[index].question;
	answers.forEach((answerButton) => {
		answerButton.innerText = data[index].answers[+answerButton.id];
	});
};

const addScoreToLeaderBored = (result) => {
	let isNameExitValue = isNameExist();
	if (isNameExitValue >= 0) {
		leaderboard[isNameExitValue] = {
			username: localStorage.getItem("userName"),
			score: result,
		};
	} else {
		leaderboard.push({
			username: localStorage.getItem("userName"),
			score: result,
		});
	}

	localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
};

//show leaderBored :-
const toggleLeaderBored = () => {
	style = document.getElementById("results").style.display;
	if (style === "none") {
		document.getElementById("results").style.display = "block";
	} else {
		document.getElementById("results").style.display = "none";
	}
};

//disabled buttons after answer
answers.forEach(
	(answer) =>
		(answer.onclick = () => {
			userAnswers.push(answer.innerText);
			answer.style.background = "rgba(6, 230, 6, 0.4)";
			answers.forEach((answer) => (answer.disabled = true));
			nextButton.style.visibility = "visible";
		})
);

//Make next button and enabled buttons after next
let index = 1;
nextButton.onclick = () => {
	if (index == 9) {
		nextButton.innerText = "Show Result";
	}
	if (index >= 10) {
		addScoreToLeaderBored(calculateScore(userAnswers));
		return;
	}
	fillQuestions(index);
	answers.forEach((answer) => {
		answer.style.background = "";
		answer.disabled = false;
	});

	nextButton.style.visibility = "hidden";

	index++;
};

fillQuestions(0);

startGameButton.onclick = () => {
	userNameForm.style.visibility = "visible";
};

goButton.onclick = () => {
	inputUserName.value &&
		((location.href = "#questionSection"),
		(userNameForm.style.visibility = "hidden"),
		localStorage.setItem("userName", inputUserName.value));
};
//create leaderbored :)
// leaderboard.forEach((user) => {
// 	userNameList.innerHTML +=
// 		"<div class='scores'>" +
// 		`<div class='leaderboardName'>${user.username}</div>` +
// 		`<div class='leaderboardScore'>${user.score}</div></div>`;
// });

LeaderboardButton.onclick = toggleLeaderBored;
document.getElementById("closeButton").onclick = toggleLeaderBored;
