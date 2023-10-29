document.addEventListener("mousemove", function(event) {
    var cursorImage = document.querySelector(".cursor-container");
    cursorImage.style.left = event.clientX + "px";
    cursorImage.style.top = event.clientY + "px";
  });




  document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // 링크의 기본 동작을 막습니다.
  
    // 딜레이 시간(ms)을 설정합니다.
    var delayTime = 4500; // 5초
  
    // 딜레이 후에 링크의 URL로 이동합니다.
    setTimeout(function() {
      window.location.href = 'game3.html';
    }, delayTime);
  });




  document.addEventListener('click', function(event) {
    var circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);
  
    var size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 2;
  
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
  
    setTimeout(function() {
      circle.parentNode.removeChild(circle);
    }, 5000);
  });





  document.addEventListener('click', function(event) {
    var ifeel = document.querySelector('.ifeel');
  
    // 요소 보이기
    ifeel.style.display = 'block';
  });