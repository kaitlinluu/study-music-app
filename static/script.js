let mood = null
let focus = null
let time = null
let TimerInterval = null
let remainingSeconds = 0


function selectMood(mood) {
    fetch(`/get_playlist?mood=${mood}`)
        .then(response => response.json())
        .then(data => {
            console.log("Playlist URL from server:", data.playlist);
            const spotify = document.getElementById("spotify");
            spotify.src = data.get_playlist;
        })
}

function selectFocus(focus) {
    const mouse = document.getElementById("mouse");
    mouse.classlist.remove('sleeping', 'working', 'running')
    if (level === "low") mouse.classList.add("sleeping");
    if (level === "medium") mouse.classList.add("working");
    if (level === "high") mouse.classList.add("running");
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



function startTimer(minutes) {
    clearInterval(timerInterval);

    let seconds = minutes * 60;

    updateTimerDisplay(seconds);

    timerInterval = setInterval(() => {
        seconds--;

        updateTimerDisplay(seconds);

        if (seconds <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    document.getElementById("timer").textContent =
        `${min}:${sec.toString().padStart(2, '0')}`;
}