document.getElementById("note").style.display = "block";
document.getElementById("page").style.display = "none";
document.getElementById("div1").style.display = "none";


const slidePage = document.querySelector("#note");
const nextBtnFirst = document.querySelector("#start");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;



nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("note").style.display = "none";
  document.getElementById("page").style.display = "none";
  document.getElementById("div1").style.display = "block";

    bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  progressText[current - 1].classList.add("active");

});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("note").style.display = "none";
  document.getElementById("page").style.display = "block";
  document.getElementById("div1").style.display = "none";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  progressText[current - 1].classList.add("active");
});

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  
});
