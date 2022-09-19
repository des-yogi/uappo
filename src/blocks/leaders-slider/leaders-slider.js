(function(){
  const leadersSlider = document.querySelector('.leaders-slider');
  if (!leadersSlider) return;

  const flkty = new Flickity( leadersSlider, {
    cellAlign: 'left',
    adaptiveHeight: false,
    imagesLoaded: true,
    contain: true,
    pageDots: false
  });
}());
