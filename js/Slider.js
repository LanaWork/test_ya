
var sliderIndex = 1;
showSlidesr(sliderIndex);

function plusSlider(n) {
  showSlidesr(sliderIndex += n);
}

function currentSlide(n) {
  showSlidesr(sliderIndex = n);
}

function showSlidesr(n) {
  var i;
  var slides = document.getElementsByClassName("mySlider");

  if (n > slides.length) {sliderIndex = 1}
  if (n < 1) {sliderIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

    sliderIndex++;
    if (sliderIndex > slides.length) {sliderIndex = 1}
    slides[sliderIndex-1].style.display = "block";
    setTimeout(showSlidesr, 5000); 
}

