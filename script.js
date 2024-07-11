document.getElementById('downloadButton').addEventListener('click', function() {
    var progressContainer = document.getElementById('progressContainer');
    var progressBar = document.getElementById('progressBar');
    progressContainer.style.display = 'block';
    
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // Trigger the file download
            window.location.href = 'path_to_your_apk_file.apk';
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }, 100); // Adjust the speed of the progress bar animation
});