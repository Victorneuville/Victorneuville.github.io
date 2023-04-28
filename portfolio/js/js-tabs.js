let scollPosition = 0;
let speed = 300;

let navBar = document.querySelector(".nav-tabs");
const btnScollLeft = document.querySelector("#scoll-left");
const btnScollRight = document.querySelector("#scoll-right");

let count = navBar.scrollWidth - navBar.offsetWidth;

function horizontalScroll(val){
    
    scollPosition += (val * speed);
    navBar = document.querySelector(".nav-tabs");
    count = navBar.scrollWidth - navBar.offsetWidth;
    
    if(scollPosition < 0){
        scollPosition = 0;
    }
    
    if(scollPosition > count){    
        scollPosition = count;
    }

    navBar.scrollLeft = scollPosition ;
}