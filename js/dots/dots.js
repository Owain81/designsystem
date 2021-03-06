/* Frontpage animation */

var canvasDots = function() {
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d'),
      colorDot = '#a9b1b5',
      color = '#AFC836';
  canvas.width = 3840;
  canvas.height = 1080;
  canvas.style.display = 'block';
  ctx.fillStyle = colorDot;
  ctx.lineWidth = .2;
  ctx.strokeStyle = color;

  var mousePosition = {
    x: 60 * canvas.width / 100,
    y: 60 * canvas.height / 100
  };

  var dots = {
    nb: 800,
    distance: 100,
    d_radius: 300,
    array: []
  };

  function Dot(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.radius = 2.5*Math.random() + 0.5;

    this.vx = ( -(this.radius/2) + this.radius*Math.random() ) * 0.5;
    this.vy = ( -(this.radius/2) + this.radius*Math.random() ) * 0.5;
  }

  Dot.prototype = {
    create: function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function(){
      for(i = 0; i < dots.nb; i++){

        var dot = dots.array[i];

        if(dot.y < 0 || dot.y > canvas.height){
          dot.vx = dot.vx;
          dot.vy = - dot.vy;
        }
        else if(dot.x < 0 || dot.x > canvas.width){
          dot.vx = - dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function(){
      for(i = 0; i < dots.nb; i++){
        for(j = 0; j < dots.nb; j++){
          i_dot = dots.array[i];
          j_dot = dots.array[j];

          if ( (i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance &&
          	   (i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
	          ctx.beginPath();
	          ctx.moveTo(i_dot.x, i_dot.y);
	          ctx.lineTo(j_dot.x, j_dot.y);
	          ctx.stroke();
	          ctx.closePath();
          }
        }
      }
    }
  };

  function createDots(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < dots.nb; i++){
      dots.array.push(new Dot());
      dot = dots.array[i];

      dot.create();
    }

    dot.line();
    dot.animate();
  }

  mousePosition.x = window.innerWidth / 2;
  mousePosition.y = window.innerHeight / 2;

  window.onmousemove = function(parameter) {
    mousePosition.x = parameter.pageX;
    mousePosition.y = parameter.pageY;
  }

  setInterval(createDots, 1000/30);
};

window.onload = function() {
  canvasDots();
};
