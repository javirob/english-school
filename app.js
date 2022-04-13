// Map BOX
mapboxgl.accessToken =
  'pk.eyJ1IjoiamF2aS1kZXYiLCJhIjoiY2wxZ2MyYnhxMDd3bjNib2dwcDI0Ym9hcSJ9.D5Gs30Hwp2wtXA6UsJFAkg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-6.264621, 53.34426],
  zoom: 18,
});

// AOS
AOS.init();

// Back to top function
//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
