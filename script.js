let audio = document.getElementById("podcast");

var plays = document.getElementById("play"); // botão play/pause

function decrease(){
    audio.playbackRate -= 0.25;
}

function skipBack(){
    plays.src = "./Media/stop.svg";
    var text = document.getElementById("text");
   text.innerText = "Tutorial de como fazer um podcast.";
   podcast.currentTime = 0;
   audio.play( audio.src = "./Media/como-fazer-um-podcast.mp3");
}

function play(){
    if (audio.paused) {
           plays.src = "./Media/stop.svg";
        audio.play();
        } else {
            plays.src = "./Media/play-circle.svg";
        audio.pause();
        }
}

function skipForward(){
    plays.src = "./Media/stop.svg";
   var skipForward = document.getElementById("skipForward");
   var text = document.getElementById("text");
   text.innerText = "Hábitos para aumentar a produtividade.";
   audio.play( audio.src = "./Media/habitos.mp3");
}   

function increase(){
    audio.playbackRate += 0.25;
}

function vol(){
    audio.volume = 0.2;
}

