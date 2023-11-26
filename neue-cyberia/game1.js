//iframe
function showIframe() {
  document.getElementById("iframeOverlay").style.display = "block";
}

function hideIframe() {
  document.getElementById("iframeOverlay").style.display = "none";
}

// 셔플 버튼 클릭하기 전까지 accela 클릭 방지
var shuffleButtonClicked = false;

var accelaElement = document.querySelector(".accela");
var shuffleButtonClicked = false;

accelaElement.addEventListener("click", function (event) {
  if (!shuffleButtonClicked) {
    event.preventDefault();
  }
});

// 버튼 클릭 시 클릭유도 애니메이션 종료
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.style.animation = "none";
});

// 1. 셔플 버튼 클릭하면 셔플
function shuffleCups() {
  shuffleButtonClicked = true;
  var cups = document.querySelectorAll(".cup");

  var interval = setInterval(function () {
    var randomIndices = [0, 1, 2].sort(() => Math.random() - 0.5);

    cups.forEach((cup, index) => {
      var newIndex = randomIndices[index];
      cup.style.transform = `translateX(${(newIndex - index) * 300}px)`;
    });
  }, 500);

  startFollowingCup2();

  setTimeout(function () {
    clearInterval(interval);
    // stopFollowingCup2();
    afterShuffle();
  }, 5000);

  function afterShuffle() {
    var messageElement = document.getElementById("message");
    messageElement.style.display = "block";
    messageElement.innerText = "어떤 컵에 Accela가 있습니까?";
  }

  // stopFollowingCup2();
}

//followCup2() 함수는 cup2와 accela 요소의 위치를 비교하여 accela 요소가 cup2를 따라가도록 설정합니다.
//cup2 요소의 위치를 계산하여 accela 요소의 위치를 조정하고, accela 요소를 배치합니다.
var accela = document.querySelector(".accela");
var cup2 = document.getElementById("cup2");

function followCup2() {
  var cup2Rect = cup2.getBoundingClientRect();
  // var offsetX =
  //   cup2Rect.left -
  //   accela.offsetLeft +
  //   (cup2Rect.width - accela.offsetWidth) / 2;
  // var offsetY = cup2Rect.top - accela.offsetTop + (cup2Rect.height - accela.offsetHeight) / 2;

  // var newLeft = cup2Rect.left + offsetX + "px";
  //  var newTop = cup2Rect.top + offsetY + 'px';

  accela.style.left = cup2Rect.left + 30 + "px";
  // accela.style.left = newLeft;
  //  accela.style.top = newTop;
}

var accelaFollowInterval;

function startFollowingCup2() {
  accelaFollowInterval = setInterval(followCup2, 1); //accela 위치 업데이트 간격?
}

function stopFollowingCup2() {
  clearInterval(accelaFollowInterval);
}

// 2. 셔플 후 컵 클릭
function cupClick(cup) {
  // 셔플 버튼 클릭하기 전까지 컵 클릭 방지
  if (!shuffleButtonClicked) {
    return;
  }

  //컵 클릭하면 위로 올라감
  cup.style.transform = `translateY(-200px)`;
  // stopFollowingCup2();

  // 컵 1,3일 경우
  if (cup.id === "cup1" || cup.id === "cup3") {
    setTimeout(function () {
      alert("틀린 컵입니다.");
      window.location.href = "index.html";
    }, 1000);
  }
  // 컵 2일 경우 quiztext 보임
  else if (cup.id === "cup2") {
    stopFollowingCup2();

    setTimeout(function () {
      var img = document.getElementById("cup2"); // 기존 이미지 요소
      var newImg = document.getElementById("cup4"); // 새로운 이미지 요소

      img.src = newImg.src;

      newImg.style.display = "block";
      img.style.opacity = "0";
    }, 1000);
  }
}