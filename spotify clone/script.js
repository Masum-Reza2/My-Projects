console.log('welcome to spotify');

// initialize the variables 
songIndex = 0;
let masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName: 'Best of NCS tune of the year', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Mr waggor is sleeping', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'aila aila habibi kiya hal hai', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'tere ishq me pagal huwa', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'dill to hai kamaya e Ishq', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'Bhoola denaGabaya e Ishq', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'Tere kamariya Thukraya e Ishq', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'Main hoon donGujara e Ishq', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
    { songName: 'KHatro ka khiladi Milaya e Ishq', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
    { songName: 'Never give up Dafaya e Ishq', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' }
]


let songItem = Array.from(document.getElementsByClassName('songItem'));
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})
// audioElement.play()

//handle play/pause click
let audioElement = new Audio('songs/1.mp3');
let masterPLay = document.getElementById('masterPLay');
let gif = document.getElementById('gif');

masterPLay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = '1'
        masterSongName.innerHTML = songs[songIndex].songName;
        masterPLay.src = 'icons/this.png'
    }
    else {
        audioElement.pause();
        masterPLay.src = 'icons/icons8-play-100 (1).png'
        gif.style.opacity = '0'
    }
})

//listen to events / input range calculation
let myProgressbar = document.getElementById('myProgressbar');
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})


//small play button making playable
let againPlay = Array.from(document.getElementsByClassName('againPlay'));

againPlay.forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.src = `songs/${songIndex}.mp3`;
            songIndex = parseInt(e.target.id);
            audioElement.currentTime = 0;
            
            audioElement.play();
            gif.style.opacity = '1'
            masterSongName.innerHTML = songs[songIndex].songName;
            element.src = 'icons/this.png'
            masterPLay.src = 'icons/this.png'
        }
        else {
            audioElement.pause();
            masterPLay.src = 'icons/icons8-play-100 (1).png'
            gif.style.opacity = '0'
            element.src = 'icons/icons8-play-100 (1).png'
            masterPLay.src = 'icons/icons8-play-100 (1).png'
        }

    })
})


let next = document.getElementById('next');
next.addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = '1'
    masterSongName.innerHTML = songs[songIndex].songName;
})


let prev = document.getElementById('prev');
prev.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = '1'
    masterSongName.innerHTML = songs[songIndex].songName;
})
