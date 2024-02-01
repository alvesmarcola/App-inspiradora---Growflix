function abrirVideo(btn) {
    let videoUrl = 'https://www.youtube.com/embed/7OWT3lfHYvE';
    let videoPlayer = '<iframe width="100%" height="400" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('videoPlayer').innerHTML = videoPlayer;
    $('#videoModal').modal('show'); // Abre o modal usando jQuery do Bootstrap
}