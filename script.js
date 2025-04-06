
let over = 0;
let ball = 0;
let runCount = 0;
let wicketCount = 0;

function updateDisplay() {
  document.getElementById("over-count").innerText = `${over}.${ball}`;
  document.getElementById("run-count").innerText = runCount;
  document.getElementById("wicket-count").innerText = wicketCount;
}

function addBall() {
  ball++;
  if (ball === 7) {
    over++;
    ball = 0;
  }
}

function minusBall() {
  if (ball === 0 && over > 0) {
    over--;
    ball = 6;
  } else if (ball > 0) {
    ball--;
  }
}

document.getElementById("button-add-over").addEventListener("click", function () {
  addBall();
  updateDisplay();
});

document.getElementById("button-minus-over").addEventListener("click", function () {
  minusBall();
  updateDisplay();
});

document.getElementById("button-add-one").addEventListener("click", function () {
  runCount++;
  addBall();
  updateDisplay();
});

document.getElementById("button-add-two").addEventListener("click", function () {
  runCount += 2;
  addBall();
  updateDisplay();
});

document.getElementById("button-add-three").addEventListener("click", function () {
  runCount += 3;
  addBall();
  updateDisplay();
});

document.getElementById("button-add-wicket").addEventListener("click", function () {
  wicketCount++;
  addBall();
  updateDisplay();
});

document.getElementById("button-minus-wicket").addEventListener("click", function () {
  if (wicketCount > 0) {
    wicketCount--;
    updateDisplay();
  }
});

document.getElementById("button-four").addEventListener("click", function () {
  runCount += 4;
  addBall();
  updateDisplay();
});

document.getElementById("button-six").addEventListener("click", function () {
  runCount += 6;
  addBall();
  updateDisplay();
});

document.getElementById("button-reset").addEventListener("click", function () {
  over = 0;
  ball = 0;
  runCount = 0;
  wicketCount = 0;
  updateDisplay();
});


updateDisplay();