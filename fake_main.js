document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;

    if (input1Value === "") {
      alert('ID를 입력해 주세요.');
    }
    else if (input2Value === 'lain') {
      window.location.href = "real_main.html" ;
    } else {
      alert('회원이 아닙니다.');
    }
  });