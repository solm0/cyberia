let scrollVid = document.getElementById("scrollVid");


//작동할 '동작' 기능 정의
function playVideo() {
  scrollVid.currentTime = window.scrollY / 30;
}

//어떤 행위에 '동작'을 실행
setInterval(playVideo, 50);







function showIframe() {
  document.getElementById("iframeOverlay").style.display = "block";
}

function hideIframe() {
  document.getElementById("iframeOverlay").style.display = "none";
}




function resetQuizFormInIframe() {
  // Get the iframe element
  var iframe = document.getElementById("iframeContent");
  
  // Post a message to the iframe to reset the quiz form
  iframe.contentWindow.postMessage('resetQuizForm', '*');
}

// Call resetQuizFormInIframe function when the page is loaded
window.onload = resetQuizFormInIframe;