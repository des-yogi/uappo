document.addEventListener('DOMContentLoaded', function () {
  //const avatar = document.getElementById('avatar');

  //new Cropper(avatar);

  const avatar = document.getElementById('avatar');
  const image = document.getElementById('image');
  const input = document.getElementById('input');
  //var $progress = $('.progress');
  //var $progressBar = $('.progress-bar');
  //var $alert = $('.alert');
  //var $modal = $('#modal');
  const modalElem = document.getElementById('cropModal');
  if (!modalElem) return;
  const modal = new bootstrap.Modal(modalElem);

  let cropper;


  input.addEventListener('change', function (e) {
    let files = e.target.files;
    const done = function (url) {
      input.value = '';
      image.src = url;
      //$alert.hide();
      //$modal.modal('show');
      modal.show();
    };

    let reader;
    let file;
    let url;

    if (files && files.length > 0) {
      file = files[0];

      if (URL) {
        done(URL.createObjectURL(file));
      } else if (FileReader) {
        reader = new FileReader();
        reader.onload = function (e) {
          done(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  });

  modalElem.addEventListener('shown.bs.modal', event => {
    if (!event.target) {
      return event.preventDefault(); // stops modal from being shown
    }
    cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 3,
    });
  });

  modalElem.addEventListener('hidden.bs.modal', event => {
    if (!event.target) {
      return event.preventDefault(); // stops modal from being shown
    }
    cropper.destroy();
    cropper = null;
  });

  document.getElementById('crop').addEventListener('click', function () {
    let ava64;
    let canvas;

    modal.hide();

    if (cropper) {
      canvas = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
      });
      avatar.src = canvas.toDataURL();
      ava64 = canvas.toDataURL();
      avatar.src = ava64; //$progress.show();
      //add after the main input one more input with this identifier, field type text
      document.getElementById('ava64').value = ava64;

    }
  });
});


(function () {
  const tooltipEl = document.getElementById('avatarLabel');
  if (!tooltipEl) return;
  const tooltip = new bootstrap.Tooltip(tooltipEl, {
      'container': '.user-account-profile__header'
  });
})();
