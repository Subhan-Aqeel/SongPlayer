var songsDets = [
    {songName:'Baarishen',url:"./songs/Baarishein---Atif-Aslam(PagalWorld).mp3",img:"./images/8599_4.jpg"},
    {songName:'Ek-Dafa-Dekhle',url:"./songs/Ek-Dafa-Dekh-le(PagalWorld).mp3",img:"./images/2888_4.jpg"},
    {songName:'Tu-Hai-To-Phir-Aur',url:"./songs/Tu-Ha-To-Phir-Aur-Kya-Chahiye(PagalWorld).mp3",img:"./images/15380_4.jpg"},
    {songName:'Zara-Zara-Behakta',url:"./songs/Zara-Zara-Behekta-Hain-Female-Version-Remix(PagalWorld).mp3",img:"./images/th.jfif"},
    {songName:'Badnam-Munda',url:"./songs/Badnam-Munda(PagalWorldl).mp3",img:"./images/1413_4.jpg"},
    {songName:'Tu-Jane-Na',url:"./songs/Tu Jaane Na - Atif Aslam (Lyrics) Lyrical Bam Hindi.mp3",img:"./images/OIP.jfif"},

  ]
// let playbtns = document.querySelector('#playbtn');
let play = document.querySelector('#play');
let forward = document.querySelector('#forward');
let backward = document.querySelector('#backward');
let songlist = document.querySelector('#songlist');
let poster = document.querySelector('#poster');
var clutter = '';
var audio = new Audio();
var counter = 0;

function mainfunction (){
songsDets.forEach((elem,indx)=>{
   clutter += `<div id=${indx} class="part1">
   <img src = ${elem.img}><h3>${elem.songName}</h3>
   </div>`
})
songlist.innerHTML = clutter
play.addEventListener('click',()=>{
    if(counter <= 0){
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        audio.pause();
        counter = 1;
  }else{
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    audio.play()
    counter = 0;
  } 
})

}
mainfunction()

const songlists = () =>{
 var selectedSong = ''
songlist.addEventListener('click',(dets)=>{
 poster.style.backgroundImage = `url(${songsDets[dets.target.id].img})` 
 poster.style.position = "relative";
 play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
 audio.src = songsDets[dets.target.id].url
 selectedSong = audio.src
 audio.play()

 
});

}
songlists()







