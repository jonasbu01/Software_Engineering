function buttonClick() {
    var button = document.getElementById('meinButton');

    // Ändere den Text des Buttons
    button.innerHTML = 'Video wechseln';

    // Führe eine Funktion aus (hier ein einfaches Beispiel)
    changeContent();
    }

var currentContentIndex = 0;
var contents = [
    { type: 'video', source: 'tAcjl9S9exw' },
    { type: 'video', source: 'tEdtyZ6LQ4Q' },
    { type: 'video', source: 'V0LfCBYfJtw' },
    // Füge weitere Videos hinzu, falls benötigt
];

function changeContent() {
    var videoContainer = document.getElementById('video-container');
    var currentContent = contents[currentContentIndex];

    // Wenn es sich um ein Video handelt
    if (currentContent.type === 'video') {
        // Wenn bereits ein Video eingebettet ist, entferne es
        while (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
        }

        // Erstelle ein neues iframe-Element mit der neuen Video-ID
        var iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/" + currentContent.source + "?autoplay=1";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;

        // Füge das neue iframe zum Video-Container hinzu
        videoContainer.appendChild(iframe);
    }
    // Wenn es sich um ein Bild handelt
    else if (currentContent.type === 'image') {
        // Ersetze das Bild im Video-Container
        videoContainer.innerHTML = '<img src="' + currentContent.source + '" alt="Bild" width="560" height="315">';
    }

    // Inkrementiere den Index für das nächste Element
    currentContentIndex = (currentContentIndex + 1) % contents.length;
}
