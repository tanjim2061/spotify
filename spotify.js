 const songs =[
    {
        title: "chill vibes",
        artist: "LoFi beats",
        src:  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    }
    {
        title : "Night Drives",
        artist : "Syntwave",
        src:  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
 ];
 let currentsong = 0;
 const audio = new Audio();
 const playpauseBtn = document.getElementById("playpause");
 const progressBar = document.queryselector(".progress");
 const info = document.queryselector(".info");
 function loadsong(index) {
    currentsong = index;
    audio.src = songs[index].src;
    info.textcontetnt = `🎵 ${songs[index].title} - ${songs[index].artist}`;

 }
 function togglePlayPause(){
    if (audio.paused){
        audio.play();
        playpauseBtn.textContent = "⏸️";
    } else{
        audio.pause();
        playpauseBtn.textContent = "▶️";
    }

 }
 document.querySelectorAll(".song").forEach((song,i)=>{
    song.addEventListener("click", () => {
        loadsong(i);
        audio.play();
        playpauseBtn.textContent = "⏸️";
    });
 });
 document.getElementById("next").addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸️";
});

document.getElementById("prev").addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playPauseBtn.textContent = "⏸️";
});
playpauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", ()=>{
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});
progressBar.addEventListener("input",()=>{
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});
