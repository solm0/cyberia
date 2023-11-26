document.addEventListener("mousemove", function(event) {
    var cursorImage = document.querySelector(".cursor-container img");
    cursorImage.style.left = (event.clientX + 50) + "px";
    cursorImage.style.top = (event.clientY + 100) + "px";
  });



function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function Circle(size, startSpeedX, startSpeedY, delay) {
    this.size = size;
    
    this.x = getRandomNumber(0, window.innerWidth - size);
    this.y = getRandomNumber(0, window.innerHeight - size);
    this.speedX = startSpeedX;
    this.speedY = startSpeedY;
    this.delay = delay;
    this.scale = 0.1; // 초기 크기
    this.scaleIncrement = 0.01; // 크기 증가량
    this.scaleInterval = 0.01; // 크기 증가 간격 (밀리초)


    this.element = document.createElement("div");
    this.element.classList.add("circle");
    this.element.style.width = size  * this.scale + "px";
    this.element.style.height = size  * this.scale + "px";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    document.body.appendChild(this.element);

    var self = this;

    this.element.addEventListener("mouseover", function() {
      window.location.href = "you_died.html"; // 원하는 다음 페이지의 URL로 변경
    });

    setTimeout(function() {
      self.move();
    }, self.delay);

    this.move = function() {
      self.x += self.speedX;
      self.y += self.speedY;

      if (
        self.x <= -(self.size * self.scale) / 2 ||
        self.x >= window.innerWidth - (self.size * self.scale) / 2
        ) {
        self.speedX *= -1;
        self.x = Math.max(0, Math.min(self.x, window.innerWidth - (self.size * self.scale)));
      }
      if (
        self.y <= -(self.size * self.scale) / 2 ||
        self.y >= window.innerHeight - (self.size * self.scale) / 2
        ) {
        self.speedY *= -1;
        self.y = Math.max(0, Math.min(self.y, window.innerHeight - (self.size * self.scale)));
      }

      

      self.scale += 0.001; // 크기 증가

      self.element.style.width = self.size * self.scale + "px";
      self.element.style.height = self.size * self.scale + "px";
      self.element.style.left = self.x + "px";
      self.element.style.top = self.y + "px";

      requestAnimationFrame(self.move);

      
      
    }
  }


  document.addEventListener("DOMContentLoaded", function() {
    
    for (var i = 0; i < 10; i++) {
      var size = 90;
      var startSpeedX = 8;
      var startSpeedY = 8;
      var delay = 500;

      setTimeout(function() {
        var circle = new Circle(size, startSpeedX, startSpeedY, delay);
      }, delay);
    }
  });