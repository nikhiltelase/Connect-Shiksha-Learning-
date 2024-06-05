//==================================================== QUIZ GAME =================================================
// It sets up a quiz game where questions are randomly selected and presented to the user. 

// Array of questions and answers
let questions = [
  {
    que: " Which of these sounds would you associate with the heart?\n A. Tring Tring\n B. Tap Tap\n C. Click Click\n D. Dhak Dhak",
    ans: "d"
  },
  {
    que: " Which of the following corresponds to ‘ek bataa do’?\n A. Pura\n B. Sawa\n C. Adha\n D. Pauna",
    ans: "c"
  },
  {
    que: "  What is the name of the highest peak in the Himalayas?\n A. K2\n B. Everest\n C. Annapurna\n D. Kanchenjunga",
    ans: "b"
  },
  {
    que: " Who is known as the “Father of the Nation” in India?\n A. Jawaharlal Nehru\n B. Mahatma Gandhi\n C. Sardar Vallabhbhai Patel\n D. Subhas Chandra Bose",
    ans: "b"
  },
  {
    que: "  Which famous monument is located in Agra, India?\n A. Red Fort\n B. Lotus Temple\n C. Taj Mahal\n D. India Gate",
    ans: "c"
  },
  {
    que: "  Which river is the longest in the world?\n A. Nile river\n B. Amazon river\n C. Mississipp iriver\n D. Yangtze river",
    ans: "a"
  },
  {
    que: " Which is the smallest planet in our solar system?\n A. Earth\n B. Mercury\n C. Venus\n D. Mars",
    ans: "b"
  },
  {
    que: "  Who was the first person to walk on the moon?\n A. Neil Armstrong \n B. Buzz Aldrin\n C. Michael Collins\n D. Yuri Gagarin",
    ans: "a"
  },
  {
    que: " Which planet is known as the “Red Planet”?\n A. Jupiter\n B. Venus\n C. Mars\n D. Saturn",
    ans: "c"
  },
  {
    que: "  What is the chemical symbol for gold?\n A. G\n B. Au\n C. Ag\n D. Pt",
    ans: "b"
  },
]

// Function to generate array of different random numbers
function generateRandomNumbers() {
  let randomNumbers = [];

  // Loop until the length of randomNumbers is equal to the length of questions array
  while (randomNumbers.length < questions.length) {
    // Generate a random number between 0 and the length of questions array
    const randomNumber = Math.floor(Math.random() * questions.length);

    // If the random number is not already in the array, add it
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

let randomNumArray = generateRandomNumbers();
console.log(randomNumArray);
// ------------------------------start game--------------------------------

alert("🤔___Welcome to Quizmania___🤔\nPress OK to start...");

let score = 0;

for (index of randomNumArray) {
  // Get the question object from questions array based on the random index
  let question = questions[index];

  // Ask the user the question and convert the answer to lowercase
  let userAnswer = prompt(`Q.${randomNumArray.indexOf(index) + 1} ${question.que}`).toLowerCase();

  if (userAnswer === question.ans) {
    score++;
    alert(`✅ Correct! Your score: ${score}/${questions.length}`);
  } else {
    alert(`❌ Wrong! Your score: ${score}/${questions.length}\nCorrect answer: ${question.ans.toUpperCase()}`);
  }
}

alert(`🤗 Your final score is ${score}/${questions.length}`);
