const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg"
];

const correctAnswers = [
  "pop art",
  "romanticism",
  "surrealism",
  "expressionism",
  "post-impressionism",
  "impressionism",
  "surrealism",
  "cubism",
  "classicism"
];

const facts = [
  "Marilyn Monroe, Andy Warhol, 1962.",
  "Wanderer Above the Sea of Fog, Caspar David Friedrich, 1818.",
  "The Persistence of Memory, Salvador Dalí, 1931.",
  "The Scream, Edvard Munch, 1893.",
  "Starry Night, Vincent van Gogh, 1889.",
  "Impression, Sunrise, Claude Monet, 1872.",
  "The Son of Man, René Magritte, 1964.",
  "Girl with a Mandolin, Pablo Picasso, 1910.",
  "The Death of Marat, Jacques-Louis David, 1793."
];

let currentIndex = 0;
let score = 0;

function updateImage() {
  document.getElementById("painting").src = images[currentIndex];
  document.getElementById("userGuess").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("fact").textContent = "";
  document.getElementById("nextImage").style.display = "none";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("userGuess").focus();
}

function checkGuess() {
  const userGuess = document.getElementById("userGuess").value.trim().toLowerCase();
  const correctAnswer = correctAnswers[currentIndex];
  const resultDiv = document.getElementById("result");
  const factDiv = document.getElementById("fact");

  if (userGuess === correctAnswer) {
    resultDiv.textContent = "✅ Correct! Well done.";
    resultDiv.style.color = "green";
    score++;
  } else {
    resultDiv.textContent = `❌ Incorrect. The correct style is "${correctAnswer}".`;
    resultDiv.style.color = "red";
  }

  factDiv.textContent = facts[currentIndex];
  document.getElementById("userGuess").disabled = true;
  document.getElementById("nextImage").style.display = "inline-block";

  if (currentIndex === images.length - 1) {
    document.getElementById("nextImage").style.display = "none";
    document.getElementById("playAgain").style.display = "inline-block";
    factDiv.innerHTML += `<br><br>🎉 You got <b>${score}</b> out of 9 correct!`;
  }
}

function loadNextImage() {
  currentIndex++;
  if (currentIndex < images.length) {
    updateImage();
  }
}

function playAgain() {
  currentIndex = 0;
  score = 0;
  document.getElementById("playAgain").style.display = "none";
  updateImage();
}

document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("nextImage").addEventListener("click", loadNextImage);
document.getElementById("playAgain").addEventListener("click", playAgain);

// Enable "Enter" key
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (document.getElementById("nextImage").style.display === "inline-block") {
      loadNextImage();
    } else {
      checkGuess();
    }
  }
});

window.onload = updateImage;