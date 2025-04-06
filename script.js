
        let over = 0; // Full overs
        let ball = 0; // Balls in current over
        let runCount = 0;
        let wicketCount = 0;
        let Addfour = 4;
        let Addsix = 6;

        // Function to update the display
        function updateDisplay() {
            document.getElementById("over-count").innerText = `${over}.${ball}`;
            document.getElementById("run-count").innerText = runCount;
            document.getElementById("wicket-count").innerText = wicketCount;
        }

        // Call updateDisplay initially
        updateDisplay();

        // Ball logic handler
        function addBall() {
            ball++;
            if (ball === 7) {
                over++;
                ball = 0;
            }
            updateDisplay();
        }

        // Remove ball (for - over)
        function minusBall() {
            if (ball === 0 && over > 0) {
                over--;
                ball = 6;
            } else if (ball > 0) {
                ball--;
            }
            updateDisplay();
        }

        // Event Listeners
        document.getElementById("button-add-over").addEventListener("click", addBall);
        document.getElementById("button-minus-over").addEventListener("click", minusBall);

        document.getElementById("button-add-run").addEventListener("click", function () {
            runCount++;
            updateDisplay();
        });
        document.getElementById("button-minus-run").addEventListener("click", function () {
            if (runCount > 0) runCount--;
            updateDisplay();
        });
        document.getElementById("button-add-wicket").addEventListener("click", function () {
            wicketCount++;
            updateDisplay();
        });
        document.getElementById("button-minus-wicket").addEventListener("click", function () {
            if (wicketCount > 0) wicketCount--;
            updateDisplay();
        });
        document.getElementById("button-four").addEventListener("click", function () {
            runCount += Addfour;
            addBall();
        });
        document.getElementById("button-six").addEventListener("click", function () {
            runCount += Addsix;
            addBall();
        });
        document.getElementById("button-reset").addEventListener("click", function () {
            over = 0;
            ball = 0;
            runCount = 0;
            wicketCount = 0;
            updateDisplay();
        });