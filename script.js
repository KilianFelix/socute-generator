function chooseFile () {
    const customChooseFile = document.getElementById('chooseFile');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    
    customChooseFile.addEventListener('click', function() {
        fileInput.click(); // Trigger file input click
    });
    
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
          fileInfo.textContent = fileInput.files[0].name;
        } else {
          fileInfo.textContent = 'No file chosen';
        }
    });
}