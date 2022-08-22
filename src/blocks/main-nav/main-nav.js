(function(){
    const toggler = document.querySelector('.burger');
    if (toggler) {
      toggler.addEventListener('click', navVisibilityToggle);

      function navVisibilityToggle(e) {
        e.preventDefault();
        toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
      }
    }
}());
