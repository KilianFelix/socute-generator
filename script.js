function chooseFile() {
  const customChooseFile = document.getElementById('chooseFile');
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');
  const uploadImage = document.getElementById('upload-img');

  fileInput.click();

  fileInput.addEventListener('change', function() {
      if (fileInput.files.length > 0) {
          fileInfo.textContent = fileInput.files[0].name;

          const reader = new FileReader();
          reader.onload = function(e) {
              uploadImage.src = e.target.result;
              uploadImage.onload = function() {  
                  myCanvas();
              }
          }
          reader.readAsDataURL(fileInput.files[0]);
      } else {
          fileInfo.textContent = 'No file chosen';
      }
  });
}

function myCanvas() {
  var c = document.getElementById("preview-img");
  var ctx = c.getContext("2d");
  var img = document.getElementById('upload-img'); 
  ctx.drawImage(img, 1, 1);
}

myCanvas()