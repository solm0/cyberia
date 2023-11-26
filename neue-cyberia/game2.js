var clickCount = 0;  // 클릭 횟수 변수 초기화

    function handleClick() {
      clickCount++;  // 클릭 횟수 증가

      // 현재 보이는 이미지 요소를 가져옴
      var visibleImages = document.querySelectorAll('.dartpin:not([style*="display: none"])');
      
      // 첫 번째 보이는 이미지를 숨김 처리
      if (visibleImages.length > 0) {
        visibleImages[0].style.display = 'none';
      }

      // 클릭 횟수가 5회 이상이면 다른 페이지로 이동
      if (clickCount >= 5) {
        window.location.href = 'index.html';
      }
    }



    document.addEventListener("click", function(event) {
      var mark = document.getElementById("mark");
      mark.style.left = (event.pageX-50) + "px";
      mark.style.top = (event.pageY-50) + "px";
      mark.style.display = "block";

    });