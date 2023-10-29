// 입력 버튼을 누르면 발생하는 기능 정의
function saveText() {
    // "text"는 html의 "text-input"이라는 아이디를 가진 요소라 이름 지어줌
    var text = document.getElementById("input1").value;
    // "text"에 입력된 내용을 "name"이라는 이름으로 저장(저장소에 저장하기 위한 이름)
    localStorage.setItem("name", text);
}
  
  // "name"에 저장된 내용(입력된 이름)을 "savedText"라고 이름 지어줌
  var savedText = localStorage.getItem("name");
  // message.html에 있는 출력되는 텍스트 영역인 "saved-text"를 "savedTextElement"라고 이름 지어줌
  var savedTextElement = document.getElementById("input1");
  // "savedText"("name"에 저장된 내용(입력된 이름))을 "savedTextElement"(텍스트가 출력되는 영역)에 출력해줌
  savedTextElement.innerHTML = savedText;





  // quiz 요소들의 이벤트 리스너를 등록하여 입력 값이 변경될 때마다 자동으로 계산
document.getElementById("quiz1").addEventListener("input", calculateScore);
document.getElementById("quiz2").addEventListener("input", calculateScore);
document.getElementById("quiz3").addEventListener("input", calculateScore);

function calculateScore() {
  var quiz1 = document.getElementById("quiz1").value;
  var quiz2 = document.getElementById("quiz2").value;
  var quiz3 = document.getElementById("quiz3").value;

  var score1 = quiz1 === "에너지소비효율등급" ? 200 : 0;
  var score2 = quiz2 === "대기전력" ? 300 : 0;
  var score3 = quiz3 === "다환방향족탄화수소" ? 500 : 0;

  var totalScore = score1 + score2 + score3;

  // 로컬 스토리지에 값을 저장
  localStorage.setItem("quiz1", quiz1);
  localStorage.setItem("quiz2", quiz2);
  localStorage.setItem("quiz3", quiz3);

  document.getElementById("score").textContent = totalScore + "/1000";
}

function saveInput() {
  // calculateScore() 함수 호출하여 값을 계산하고 로컬 스토리지에 저장
  calculateScore();
}

// 페이지 로드 시 이전에 저장된 값이 있다면 가져와서 출력
window.addEventListener("load", function () {
  var savedQuiz1 = localStorage.getItem("quiz1");
  var savedQuiz2 = localStorage.getItem("quiz2");
  var savedQuiz3 = localStorage.getItem("quiz3");

  // 이전에 저장된 값이 있다면 해당 값을 입력 필드에 설정
  if (savedQuiz1) {
    document.getElementById("quiz1").value = savedQuiz1;
  }
  if (savedQuiz2) {
    document.getElementById("quiz2").value = savedQuiz2;
  }
  if (savedQuiz3) {
    document.getElementById("quiz3").value = savedQuiz3;
  }

  // 초기 값으로 calculateScore() 함수 호출하여 점수 계산 및 출력
  calculateScore();
});






function resetQuizForm() {
  var quizInputs = document.getElementsByClassName('quiz');
  for (var i = 0; i < quizInputs.length; i++) {
      var inputs = quizInputs[i].getElementsByTagName('input');
      for (var j = 0; j < inputs.length; j++) {
          inputs[j].value = '';
      }
  }
}

// Listen for a message from the parent window
window.addEventListener('message', function(event) {
  if (event.data === 'resetQuizForm') {
      resetQuizForm();
  }
});