console.log('Welcome');

// Initialize the variables
let songIndex = 0;
let audio = new Audio('pod_list/1.mp3');
let gif = document.getElementById('gif');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressbar');
let masterPlay1 = document.getElementsByClassName('podplay');

let songs = [
    { podName: "Work Life-Adam Grant", filePath: "pod_list/1.mp3" },
    { podName: "Inspirational speeches", filePath: "pod_list/2.mp3" },
    { podName: "Mindful Business", filePath: "pod_list/3.mp3" },
    { podName: "Ameero ki soch", filePath: "pod_list/4.mp3" },
    { podName: "Jay Shetty", filePath: "pod_list/5.mp3" },
    { podName: "Elon Musk Podcast", filePath: "pod_list/6.mp3" },
    { podName: "The Daily", filePath: "pod_list/7.mp3" },
    { podName: "How to become rich?", filePath: "pod_list/8.mp3" },
    { podName: "2022 in review", filePath: "pod_list/9.mp3" },
    { podName: "Secret to achieve success", filePath: "pod_list/10.mp3" },
]

// Handle Events
masterPlay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        gif.style.opacity = 1;
    }
    else {
        audio.pause();
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-fill');
        gif.style.opacity = 0;
    }
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audio.src = `pod_list/${songIndex + 1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audio.src = `pod_list/${songIndex + 1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    gif.style.opacity = 1;
})

// Listen to Events
audio.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audio.currentTime / audio.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audio.currentTime = myProgressBar.value * audio.duration / 100;
})

const makeAllPlays = () => {
    Array.from(masterPlay1).forEach((element) => {
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-fill');
    })
}

Array.from(masterPlay1).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-fill');
        e.target.classList.add('bi-pause-circle-fill');
        audio.src = `pod_list/${songIndex + 1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    })
})