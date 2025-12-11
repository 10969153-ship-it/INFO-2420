// Image data – from Project7/Images/
var imgArray = [
  { large: 'Images/BaldEagleSm.jpg',    label: 'Bald Eagle' },
  { large: 'Images/HeronSm.jpg',        label: 'Great Blue Heron' },
  { large: 'Images/Hummingbird.jpg',  label: 'Hummingbird' },
  { large: 'Images/StorkSmall.jpg',     label: 'White Stork' }
];

// Swap the large image and caption
function swapImage(imgID) {
  var theImage = document.getElementById('theImage');
  var textDiv  = document.getElementById('bottomText');

  if (!theImage || !textDiv || !imgArray[imgID]) return;

  theImage.src = imgArray[imgID].large;
  theImage.alt = imgArray[imgID].label;
  textDiv.textContent = imgArray[imgID].label;

  // Highlight active thumbnail
  var thumbBoxes = document.querySelectorAll('.thumbbox');
  for (var i = 0; i < thumbBoxes.length; i++) {
    thumbBoxes[i].classList.remove('active');
  }
  if (thumbBoxes[imgID]) {
    thumbBoxes[imgID].classList.add('active');
  }
}

// Preload gallery images
function preloadImages() {
  for (var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image();
    tmpImg.src = imgArray[i].large;
  }
}
