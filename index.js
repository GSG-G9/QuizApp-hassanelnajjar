let data = [
	{
		question: "First Question",
		answers: ["a", "b", "c", "d"],
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

const nextButton = document.getElementById("next");
nextButton.style.visibility = "hidden";
const questionDiv = document.getElementById("question");
const answers = document.querySelectorAll("#answers button");
const userAnswers = [];

const calculateScore = (userAnswers) => {
	console.log(
		data.filter((item, index) => {
			return item.correctAnswer === userAnswers[index];
		}).length
	);
};

const fillQuestions = (index) => {
	questionDiv.innerText = data[index].question;
	answers.forEach((answerButton) => {
		answerButton.innerText = data[index].answers[+answerButton.id];
	});
};
//disabled buttons after answer
answers.forEach(
	(answer) =>
		(answer.onclick = () => {
			userAnswers.push(answer.innerText);
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
		calculateScore(userAnswers);
		return;
	}
	fillQuestions(index);
	answers.forEach((answer) => (answer.disabled = false));
	nextButton.style.visibility = "hidden";
	index++;
};

fillQuestions(0);
