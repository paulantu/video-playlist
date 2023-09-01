var videoPlayer = document.getElementById("d3-videoPlayer");
var myVideo = document.getElementById("d3-myVideo");


function closeVideo(){
    videoPlayer.style.display = "none";
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
}

function stopVideo(){
  $('#d3-myVideo').trigger('pause');
  // alert();
}

