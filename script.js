let windowbar=document.getElementById("windowbar")
let windowlogo=document.getElementById("windowlogo")
let container1=document.getElementById("container1")

windowlogo.addEventListener('click',()=>{
    if( windowbar.style.top=="80px"){
         windowbar.style.top="2000px"
    }else{
        windowbar.style.top="80px";
    }
})

let windowstart1=document.getElementById('windowstart1')
setTimeout(()=>{
    windowstart1.style.top="-1000px"
},2000)

let weathertele=document.getElementById('weathertele')
let weather1=document.getElementById('weather1')

weather1.addEventListener('click',()=>{
    if(weathertele.style.left=='-2000px'){
        weathertele.style.left='20px'
    }else{
        weathertele.style.left='-2000px'
    }
})
let smallwindow9=document.getElementById('smallwindow9')
let chrome12=document.getElementById('chrome12')
chrome12.addEventListener('dblclick',()=>{
    smallwindow9.style.display="block";
})
let googlesearch=document.getElementById('googlesearch')
let google9=document.getElementById('google9')
google9.addEventListener('click',()=>{
    if(!googlesearch.value) return;
    window.location = 'https://www.google.com/search?q=' + googlesearch.value;
})
let close9=document.getElementById('close9')

close9.addEventListener('click',()=>{
    smallwindow9.style.display="none";
})
let maximize9=document.getElementById('maximize9')
maximize9.addEventListener('click',()=>{
    if( smallwindow9.style.width=="100vw"){
        smallwindow9.style.width="40%"
        smallwindow9.style.height="60%"
        smallwindow9.style.top="100px"
       }else{
        smallwindow9.style.width="100vw"
        smallwindow9.style.height="100vh"
        smallwindow9.style.top="0"
       }
})