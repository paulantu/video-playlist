let allVideos = document.querySelectorAll('.d2-all-videos .d2-video-card');
let playVideo = document.querySelector('.d2-play-video video');
let videoTitle = document.querySelector('.d2-video h6')


allVideos.forEach(video => {
    video.onclick = () => {
        allVideos.forEach(myVideo => myVideo.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let source = video.children[0].getAttribute('src');
            playVideo.src = source;
        }
    }
})
