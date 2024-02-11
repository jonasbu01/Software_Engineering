function showCurrentTime() {
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById('timeDisplay').innerText = currentTime;
}

function showImage() {
    var imageUrl = 'https://c8.alamy.com/compde/apf7hm/niedliche-kleine-pony-tier-lacheln-lustige-pferde-apf7hm.jpg';  
    var imageElement = document.getElementById('imageDisplay');
    imageElement.src = imageUrl;
    imageElement.style.display = 'block'; // Zeige das Bild an
}