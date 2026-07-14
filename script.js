/*==========================================
MOVIMIENTO SUAVE DEL GRID
==========================================*/

document.addEventListener("mousemove",(e)=>{

let x=(e.clientX/window.innerWidth-.5)*20;

let y=(e.clientY/window.innerHeight-.5)*20;

document.querySelector(".grid").style.transform=

`perspective(600px) rotateX(65deg) translate(${x}px,${y}px)`;

});


/*==========================================
REPRODUCTOR PARWA
==========================================*/

const music=document.getElementById("bgMusic");

const button=document.getElementById("musicButton");

const status=document.querySelector(".trackStatus");


button.addEventListener("click",()=>{

if(music.paused){

music.play();

button.innerHTML="⏸";

button.classList.add("playing");

status.innerHTML="Reproduciendo";

}else{

music.pause();

button.innerHTML="▶";

button.classList.remove("playing");

status.innerHTML="Sistema de Audio";

}

});


/*==========================================
AL FINALIZAR EL AUDIO
==========================================*/

music.addEventListener("ended",()=>{

button.innerHTML="▶";

button.classList.remove("playing");

status.innerHTML="Sistema de Audio";

});