(function(){
  const hiddenBlock = document.getElementById('collapsedBlock');
  const inviteTogglers = document.querySelectorAll('[name="invitation"]');

  if (!inviteTogglers) return;

  const togglerHandler = function (e) {
    let radio = e.target;
    if (radio.value === 'yes' && radio.checked) {
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
