(function(){
  function throttle(fn, delay) {
    let last = undefined;
    let timer = undefined;
    return function () {
      const now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, delay);
      } else {
        last = now;
        fn();
      }
    };
  }
  function onScroll() {
    if (window.pageYOffset) {
      header.classList.add('is-active');
    } else {
      header.classList.remove('is-active');
    }
  }
  const header = document.querySelector('.js-header');
  window.addEventListener('scroll', throttle(onScroll, 25), {passive: true});
}());
