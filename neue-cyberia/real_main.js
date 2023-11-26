window.addEventListener('DOMContentLoaded', function() {
  alert('환영합니다. 즐거운 시간 보내세요.');
});



let scrollVid = document.getElementById("scrollVid");

function playVideo() {
  scrollVid.currentTime = window.scrollY / 30;
}

setInterval(playVideo, 50);