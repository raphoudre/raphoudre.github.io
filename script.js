let boutton = document.getElementById("rick");
boutton.onclick = function(){
    document.getElementById("rickrolled").classList.toggle("invisible");
    document.getElementById("rickrolled").play();
    boutton.classList.toggle("invisible");
}