const audio = new Audio();
const playBtn = document.getElementById('play-btn');
const folderInput = document.getElementById('folder-input');
const sourceContainer = document.querySelector('.source-container');

let playlist = [];
let currentTrackIndex = 0;

folderInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    
    playlist = files.filter(file => 
        file.type.startsWith('audio/') || 
        file.name.endsWith('.mp3') || 
        file.name.endsWith('.wav') ||
        file.name.endsWith('.ogg')
    );

    playlist.sort((a, b) => a.name.localeCompare(b.name));
    
    if (playlist.length > 0) {
        sourceContainer.style.borderColor = '#555';
        currentTrackIndex = 0;
        loadAndPlayTrack(currentTrackIndex);
    }
});

function loadAndPlayTrack(index) {
    if (playlist.length === 0) return;
    
    const file = playlist[index];
    audio.src = URL.createObjectURL(file);
    audio.play();
    playBtn.textContent = 'STOP';
}

function togglePlay() {
    if (playlist.length === 0) return;
    
    if (audio.paused) {
        audio.play();
        playBtn.textContent = 'STOP';
    } else {
        audio.pause();
        playBtn.textContent = 'PLAY';
    }
}

function nextTrack() {
    if (playlist.length === 0) return;
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
    loadAndPlayTrack(currentTrackIndex);
}

audio.addEventListener('ended', () => {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
    loadAndPlayTrack(currentTrackIndex);
});
