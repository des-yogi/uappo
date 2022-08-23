// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  const partners = document.querySelector('.partners-slider__carousel');
  if (!partners) return;

  const slider = new Flickity(partners, {
    wrapAround: true,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 3,
  });
}());
