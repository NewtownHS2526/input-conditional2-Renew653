const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let jersey = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against boroughs.
  if (currentAnswer === "Lake Erie" || currentAnswer === "Erie") {
    outputBox.innerHTML += `<h3>Lake Erie</h3><p>this lake is about 4,000 years old and is the fourth largest of the Great Lakes!<p>`;
    score += 1;
  } else if (currentAnswer === "Lake Superior" || currentAnswer === "Superior") {
    outputBox.innerHTML += `<h3>Lake Superior</h3><p>Lake Superior is the world's largest freshwater lake by surface area!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Michigan" || currentAnswer === "Michigan") {
    outputBox.innerHTML += `<h3>Lake Michigan</h3><p>The only Great Lake located entirely within the United States!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Huron" || currentAnswer === "Huron") {
    outputBox.innerHTML += `<h3>Lake Huron</h3><p>Possesses the longest shoreline of all the lakes when counting its 30,000 islands.</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Ontario" || currentAnswer === "Ontario") {
    outputBox.innerHTML += `<h3>Lake Ontario</h3><p>The smallest by surface area and sits at the lowest elevation.</p>`;
    score += 1;
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a Great Lake.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

const checkScore = () => {
  if (score === 5) {
    statusBox.innerHTML = "Congratulations, you found all five Great Lakes!";
  }
};

textBox.addEventListener("change", checkAnswer);