//Slide Show JS
var slideIndex = [1,1];
var slideId = ["bfa-slideshow", "personal-slideshow"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
//End of SlideShow JS



//Responsive Nav JS
function myFunction() {
  var x = document.getElementById("RespNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
   x.className = "nav";
  }
} 

//Contact Form Verification 
function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }

  let email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("email must be filled out");
    return false;
  }
} 




