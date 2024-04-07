function playAudio() 
{
var audio = document.getElementById("audio");
audio.play();
}

function pauseAudio() 
{
    var audio = document.getElementById("audio");
    audio.pause();
}






// for toggling dark mode

document.getElementById("toggleButton").addEventListener("click", function() {
    var body = document.body;
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "white";
    }
});



















