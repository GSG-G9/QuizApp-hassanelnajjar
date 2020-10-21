let Questions = [
	{
		question: "Ali Age ?",
		answers: ["25", "27", "29", "31"],
		correctAnswer: "31",
	},
	{
		question: " 6 / 2 * (1+2)",
		answers: ["9", "1.5", "1", "4"],
		correctAnswer: "9",
	},
	{
		question:
			"I am an odd number. Take away one letter and I become even. What number am I?",
		answers: ["Seven", "Nine", "Three", "One"],
		correctAnswer: "Seven",
	},
	{
		question: "9 - 3 / 1/3 + 1 ",
		answers: ["3", "9", "1", "19"],
		correctAnswer: "9",
	},
	{
		question: "18 / 3 * ( 5 - 4 + 1 )",
		answers: ["3", "12", "9", "22"],
		correctAnswer: "12",
	},
	{
		question: "console.log(false >= 0)",
		answers: ["true", "false", "undefined", "null"],
		correctAnswer: "true",
	},
	{
		question: "How many colours in the Olympic rings?",
		answers: ["Five", "Three", "Six", "Two"],
		correctAnswer: "Five",
	},
	{
		question:
			"Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
		answers: ["20", "22", "18", "16"],
		correctAnswer: "22",
	},
	{
		question: "Which number is equivalent to 3^(4)÷3^(2)",
		answers: ["6", "12", "9", "32"],
		correctAnswer: "9",
	},
	{
		question: "أين يوجد البحر بدون ماء؟",
		answers: ["الخريطة", "تركيا", "الجزائر", "أمريكا"],
		correctAnswer: "الخريطة",
	},
	{
		question: "أخت خالك وليست خالتك فمن هي ?",
		answers: ["أمي", "خالتي", "أختي", "عمتي"],
		correctAnswer: "أمي",
	},
	{
		question: " Name The Biggest Island In The World ?",
		answers: ["Greenland", "Great Britain", "New Guinea", "Madagascar"],
		correctAnswer: "Greenland",
	},
	{
		question: "How many months have 28 days?",
		answers: [
			"2",
			"1",
			"All of them",
			"Depends if there's a leap year or not.",
		],
		correctAnswer: "All of them",
	},
	{
		question:
			"You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?",
		answers: ["1st", "2nd", "3rd", "None"],
		correctAnswer: "2nd",
	},
	{
		question:
			"If you jump off the roof of a three-story building, where would you land?",
		answers: ["On Your Legs", "Hospital.", "On a Car", "On Ground"],
		correctAnswer: "Hospital.",
	},
	{
		question:
			"ما هي نتيجة خسارة  الريال ضد شاختار في دوري الابطال الشوط الاول امبارح  :)",
		answers: ["3-0", "4-0", "5-0", "6-0"],
		correctAnswer: "3-0",
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
				time: 0,
			},
		])
	);
