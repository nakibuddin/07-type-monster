const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, typeSpeedWpm, accuracy) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold green2">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Type speed: <span class="bold green2">${typeSpeedWpm}</span> wpm</p>
  <p>Type accuracy: <span class="bold green2">${accuracy}</span> % </p>
  </div>
  `;  
  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, typeSpeedWpm, accuracy });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));
  

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
    <h3>${test.questionText}</h3>
    <p>You took: <span class="bold green2">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p> -------------------------------- </P>
    <p>Type speed: <span class="bold green2">${test.typeSpeedWpm}</span> wpm</p>
    <p>Type accuracy: <span class="bold green2">${test.accuracy}</span> % </p>
  `;

    histories.appendChild(newRow);
  });

  // const newLine = document.createElement('p');
  // newLine.innerHTML = `<br><br>`;
  // histories.appendChild(newLine);  

}
// localStorage.clear();