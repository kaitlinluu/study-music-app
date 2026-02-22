let mood = null
let focus = null
let time = null
let selectedTime = 0
let timerInterval = null
let remainingSeconds = 0


function selectMood(mood) {
    fetch(`/get_playlist?mood=${mood}`)
        .then(response => response.json())
        .then(data => {
            console.log("Playlist URL from server:", data.playlist);
            const spotify = document.getElementById("spotify");
            spotify.src = data.playlist;
        })
}


function Low() {
    document.body.style.backgroundImage = "url('/static/images/lawn_calm.gif')";
}

function Medium() {
    document.body.style.backgroundImage = "url('/static/images/rice_normal.gif')";
}

function High() {
    document.body.style.backgroundImage = "url('/static/images/clem_crashout.gif')";
}


function setTime(minutes) {
    selectedTime = minutes;
    remainingSeconds = minutes * 60;
    updateTimerDisplay(remainingSeconds);
}

function startSession() {
    if (selectedTime === 0) {
        alert("Please select a study time first!");
        return;
    }

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Take a break :)");
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    document.getElementById("timer").textContent =
        `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}