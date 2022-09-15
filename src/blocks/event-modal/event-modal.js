(function(){
  const hiddenBlock = document.getElementById('collapsedBlock');
  const inviteTogglers = document.querySelectorAll('.visibilityTrigger');
  if (!hiddenBlock) return;
  const hiddenFields = hiddenBlock.querySelectorAll('.hidden-field');

  if (!inviteTogglers) return;

  const setRequired = function () {
    Array.prototype.forEach.call(hiddenFields, function (item) {
      let field = item;
      if (!field) return;
      field.setAttribute('required', '');
    });
  };

  const removeRequired = function () {
    Array.prototype.forEach.call(hiddenFields, function (item) {
      let field = item;
      if (!field) return;
      field.removeAttribute('required');
    });
  };

  const togglerHandler = function (e) {
    let radio = e.target;
    if (radio.value === '1' && radio.checked) {
      hiddenBlock.classList.add('show');
      setRequired();
    } else {
      hiddenBlock.classList.remove('show');
      removeRequired();
    }
  };

  Array.prototype.forEach.call(inviteTogglers, function (item) {
    let radio = item;
    if (!radio) return;
    radio.addEventListener('change', togglerHandler);
  });
}());
