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
    let initialAvatarURL;
    let canvas;

    modal.hide();

    if (cropper) {
      canvas = cropper.getCroppedCanvas({
        width: 160,
        height: 160,
      });
      initialAvatarURL = avatar.src;
      avatar.src = canvas.toDataURL();
      //$progress.show();
      //$alert.removeClass('alert-success alert-warning');
      canvas.toBlob(function (blob) {
        let formData = new FormData();

        formData.append('avatar', blob, 'avatar.jpg');

        const request = new XMLHttpRequest();

        request.open('POST', 'https://jsonplaceholder.typicode.com/photos');

        request.onload = () => {
          if (request.status !== 200) {
            // выводим ошибку в консоль
            console.log(`Ошибка ${request.status}: ${request.statusText}`);
            return;
          }
          // получаем ответ сервера
          const response = request.response;
          console.log(response);
        };

        request.onerror = () => {
          avatar.src = initialAvatarURL;
        };

        request.send(formData);

        /*$.ajax('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          data: formData,
          processData: false,
          contentType: false,

          xhr: function () {
            var xhr = new XMLHttpRequest();

            xhr.upload.onprogress = function (e) {
              var percent = '0';
              var percentage = '0%';

              if (e.lengthComputable) {
                percent = Math.round((e.loaded / e.total) * 100);
                percentage = percent + '%';
                $progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
              }
            };

            return xhr;
          },

          success: function () {
            //$alert.show().addClass('alert-success').text('Upload success');
          },

          error: function () {
            avatar.src = initialAvatarURL;
            //$alert.show().addClass('alert-warning').text('Upload error');
          },

          complete: function () {
            //$progress.hide();
          },
        });*/


      });
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
