document.getElementById("note").style.display = "block";
document.getElementById("page").style.display = "none";
document.getElementById("div1").style.display = "none";  
document.getElementById("results").style.display = "none";
document.getElementById("result-head").style.display = "none";



const nextBtnFirst = document.querySelector("#start");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
progressText[current - 1].classList.add("active");



nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("results").style.display = "none";
  document.getElementById("result-head").style.display = "none";
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
  document.getElementById("results").style.display = "none";
  document.getElementById("result-head").style.display = "none";
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
  document.getElementById("page").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("result-head").style.display = "block";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  progressText[current - 1].classList.add("active");
});


// navbar

;(function($) {
  $(function() { 
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this)
        .siblings('.nav-dropdown')
        .slideToggle()
      $('.nav-dropdown')
        .not($(this).siblings())
        .hide()
      e.stopPropagation()
    })
    $('html').click(function() {
      $('.nav-dropdown').hide()

    })
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {    
      $('nav ul').slideToggle();
      // stepper show and hide
      $('.progress-bar').toggle('fast');

    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active')
    })
    
  })
  
})(jQuery)