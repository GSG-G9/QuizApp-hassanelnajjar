let Questions = [
	{
		question: "Ali Age ?",
		answers: ["25", "27", "29", "31"],
		correctAnswer: "31",
	},
	{
		question: "Second Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "Third Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Forth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "Fifth Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Sixth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "Seventh Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Eighth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "Ninth Question",
		answers: ["a", "b", "c", "d"],
		correctAnswer: "a",
	},
	{
		question: "Tenth Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "11 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "12 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "13 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "14 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "15 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
	{
		question: "16 Question",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
	},
];

//set localstorageData when app start

//set Questions
localStorage.getItem("data") ||
	localStorage.setItem("data", JSON.stringify(Questions));

//set leaderbored
localStorage.getItem("leaderbored") ||
	localStorage.setItem(
		"leaderbored",
		JSON.stringify([
			{
				username: "Hassan",
				score: 0,
			},
		])
	);
