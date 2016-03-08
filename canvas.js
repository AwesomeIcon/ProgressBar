// window.onload = function(){
	var wave = document.getElementById("wave");
	var ctx = wave.getContext('2d');
	var canvas_span = document.getElementById("canvas_wave").getElementsByTagName("span")[0];


// }

//如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
 window.requestAnimFrame = (function(){
   return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       function( callback ){
        window.setTimeout(callback, 1000 / 60); //60HZ
       };
  })();

var step = 0; //倾斜角度
var radius = 100;
function loop(){
	ctx.clearRect(0,0,wave.width,wave.height);
	ctx.fillStyle = "rgba(0,222,255, 0.5)";
	step++;
	//转弧度制
	var angle = step * Math.PI / 720;
	var leftDeltaHeight = Math.sin(angle*10) / 4;
	var rightDeltaHeight = Math.cos(angle*10) / 4;
	ctx.beginPath();
	var X1 = 100 - Math.sin((angle + leftDeltaHeight)) * radius;
	var Y1 = 100 + Math.cos((angle + leftDeltaHeight)) * radius;
	var X2 = 100 + Math.sin((angle + rightDeltaHeight)) * radius;
	var Y2 = 100 + Math.cos((angle + rightDeltaHeight)) * radius;
	var Y1_ = 100 + Math.cos(angle) * radius;
	var Y2_ = 100 + Math.cos(angle) * radius;
	canvas_span.innerHTML = Math.round((200 - (Y1_ + Y2_) / 2) / 200 * 100) + '%';
	ctx.moveTo(X1,Y1);
	ctx.bezierCurveTo(100,Y1,100,Y2,X2,Y2);
	ctx.arc(100,100,radius,0.5*Math.PI - angle - rightDeltaHeight,0.5*Math.PI + angle + leftDeltaHeight);
	ctx.closePath();
	ctx.fill();
	if((angle + leftDeltaHeight) > Math.PI && (angle + rightDeltaHeight) > Math.PI) return;
	requestAnimFrame(loop);
}

loop();