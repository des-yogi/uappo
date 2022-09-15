(function(){
  const hiddenBlock = document.getElementById('collapsedBlock');
  const inviteTogglers = document.querySelectorAll('.visibilityTrigger');

  if (!inviteTogglers) return;

  const togglerHandler = function (e) {
    let radio = e.target;
    if (radio.value === '1' && radio.checked) {
      hiddenBlock.classList.add('show');
    } else {
      hiddenBlock.classList.remove('show');
    }
  };

  Array.prototype.forEach.call(inviteTogglers, function (item) {
    let radio = item;
    if (!radio) return;
    radio.addEventListener('change', togglerHandler);
  });
}());
