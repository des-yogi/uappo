(function () {
  const agreementElems = document.querySelectorAll('[class$="__agreement"]');

  for (let i = 0; i < agreementElems.length; i++) {
    let agreementElem = agreementElems[i];
    if (!agreementElem) return;
    const submitBtn = agreementElem.querySelector('button[type=submit]');
    const agreementCheckbox = agreementElem.querySelector('.agreement-field');

    if (agreementCheckbox) {
      agreementCheckbox.addEventListener('change', function (e) {
        if (!e.target.checked) {
          submitBtn.disabled = true;
        } else {
          submitBtn.disabled = false;
        }
      });
    }
  }
})();
