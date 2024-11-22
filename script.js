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
let smallwindow=document.getElementById("smallwindow")
let thispc=document.getElementById('thispc')
thispc.addEventListener('dblclick',()=>{
    smallwindow.style.display="block";
})
let close=document.getElementById('close')
close.addEventListener('click',(e)=>{
    smallwindow.style.display="none";
})
let max1=document.getElementById('max1')
max1.addEventListener('click',()=>{
   if( smallwindow.style.width=="100vw"){
    smallwindow.style.width="40%"
    smallwindow.style.height="60%"
    smallwindow.style.top="100px"
   }else{
    smallwindow.style.width="100vw"
    smallwindow.style.height="100vh"
    smallwindow.style.top="0"
   }
})
let spotify1=document.getElementById('spotify1')
spotify1.addEventListener('dblclick',()=>{
    smallwindow.style.display="block";
})