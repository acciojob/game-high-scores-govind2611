const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

  if (!name || isNaN(score)) {
    alert("Please enter a valid name and score.");
    return;
  }

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ name, score });

  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

// Show scores in div
function showScores() {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  if (highScores.length === 0) {
    scoresDiv.textContent = "No scores yet";
    return;
  }

  scoresDiv.innerHTML = `
    <table>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
      ${highScores
        .map(
          score =>
            `<tr>
              <td>${score.name}</td>
              <td>${score.score}</td>
            </tr>`
        )
        .join("")}
    </table>
  `;
}
