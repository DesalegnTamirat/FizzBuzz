let count = 1;
let isRunning = false;
let intervalId;
const header = document.getElementById("display");
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");
const speedSelector = document.getElementById("speed");
const themeToggleBtn = document.getElementById("themeToggle");
const historyList = document.getElementById("history");
const fizzSound = document.getElementById("fizzSound");
const buzzSound = document.getElementById("buzzSound");
const fizzbuzzSound = document.getElementById("fizzbuzzSound");

function updateDisplay() {
    let result;
    if (count % 15 === 0) {
        fizzbuzzSound.play();
        result = "FizzBuzz";
    } else if (count % 5 === 0) {
        buzzSound.play();
        result = "Buzz";
    } else if (count % 3 === 0) {
        fizzSound.play();
        result = "Fizz";
    } else {
        result = count;
    }

    header.classList.add('animate');
    setTimeout(() => header.classList.remove('animate'), 300);

    header.innerText = result;

    // Clear the history list when updating
    historyList.innerHTML = '';

    count++;
}

function toggleTimer() {
    if (isRunning) {
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
        clearInterval(intervalId);
    } else {
        const speed = speedSelector.value;
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
        intervalId = setInterval(updateDisplay, speed);
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(intervalId);
    count = parseInt(document.getElementById("startNumber").value) || 1;
    header.innerText = count;
    toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
    isRunning = false;
    historyList.innerHTML = ''; // Clear the history list on reset
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelector('.container').classList.remove('dark-mode');
        document.querySelector('.container').classList.add('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.remove('light-mode');
        document.querySelector('.container').classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

toggleBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);
themeToggleBtn.addEventListener("click", toggleTheme);
