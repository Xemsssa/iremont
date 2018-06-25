
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// hamburger
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunc() {
    
//    alert ("hello from js");
    
    var element = document.getElementsByClassName("menu_layout")[0];

    element.classList.toggle("show");
    
}


// maps
//
//function initMap() {
//    var uluru = {lat: 60.0467306, lng: 30.3094176};
//    
//    var map = new google.maps.Map(document.getElementById('map'), {
//      zoom: 10,
//      center: uluru
//    });
//    
//    var marker = new google.maps.Marker({
//      position: uluru,
//      map: map
//    });
//}



