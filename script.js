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
