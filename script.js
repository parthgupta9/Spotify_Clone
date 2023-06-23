console.log("Welcome to my playlist");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let gif = document.getElementById('icons');
let masterplay = document.getElementById('masterplay');

// let currentTime = document.getElementById('time');
letmyprogressbar=document.getElementById('myprogressbar');


let songs= [
    { songName: 'love yourself', filePath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    { songName: 'let me love you',filePath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    { songName: 'shape of you',filePath:"songs/3.mp3", coverpath :"covers/3.jpg"},
    { songName: 'popstar',filePath:"songs/4.mp3", coverpath :"covers/4.jpg"},
    { songName: 'treat you better',filePath:"songs/5.mp3", coverpath :"covers/5.jpg"},
    { songName: 'love story',filePath:"songs/6.mp3", coverpath : "covers/6.jpg"},
    { songName: 'memories',filePath:"songs/7.mp3", coverpath :"covers/7.jpg"},
    { songName: 'friends',filePath:"songs/8.mp3", coverpath :"covers/8.jpg"},
    { songName: 'Stay',filePath:"songs/9.mp3", coverpath :"covers/9.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused ){
        audioElement.play(); 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    
}
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
}) 

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value*audioElement.duration/100
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songbanner')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songbanner')).forEach((element)=>{
           element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex= parseInt(e.target.id);
            // e.target.classList.remove('fa-circle-play');
            // e.target.classList.add('fa-circle-pause');
            audioElement.src= `songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
           }) 
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>0){
        songIndex=0;
    }
        else{
            songIndex+=1;
        }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex=0;
    }
        else{
            songIndex-=1;
        }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})


