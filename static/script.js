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



function changeLow() {
    let img = document.getElementById("default");
    img.src = "../static/images/tenor_1.gif";
}

function changeMedium() {
    let img = document.getElementById("default");
    img.src = "../static/images/image2.gif";
} 

function changeHigh() {
    let img = document.getElementById("default");
    img.src = "../static/images/image3.gif";
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