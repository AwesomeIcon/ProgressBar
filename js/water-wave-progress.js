/* modify block start*/
var wave = document.getElementById("wave");
var canvas_wave = document.getElementById("canvas_wave");
var fillColor = "rgba(0,222,255, 0.5)";
var fontColor = "black";
var fontfamily = "Times New Roman";
/* modify block end*/

var ctx = wave.getContext('2d');
var canvas_span = canvas_wave.getElementsByTagName("span")[0];
window.onload = function(){
	canvas_wave.style.position = "relative";
	canvas_wave.style.width = wave.width + 'px';
	canvas_wave.style.height = wave.height + 'px';
	wave.style.position = "absolute";
	canvas_span.style.width = "100%";
	canvas_span.style.height = "100%";
	canvas_span.style.position = "absolute";
	canvas_span.style.fontSize = parseInt(wave.width)/4 + 'px';
	canvas_span.style.fontWeight = "bold";
	canvas_span.style.lineHeight = "4";
	canvas_span.style.textAlign = "center";
	canvas_span.style.color = fontColor;
	canvas_span.style.fontFamily = fontfamily;
}

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
var radius = wave.width / 2;
function loop(){
	ctx.clearRect(0,0,wave.width,wave.height);
	ctx.fillStyle = fillColor;
	step++;
	//转弧度制
	var angle = step * Math.PI / 720;
	var leftDeltaHeight = Math.sin(angle*10) / 4;
	var rightDeltaHeight = Math.cos(angle*10) / 4;
	ctx.beginPath();
	var X1 = radius - Math.sin((angle + leftDeltaHeight)) * radius;
	var Y1 = radius + Math.cos((angle + leftDeltaHeight)) * radius;
	var X2 = radius + Math.sin((angle + rightDeltaHeight)) * radius;
	var Y2 = radius + Math.cos((angle + rightDeltaHeight)) * radius;
	var Y1_ = radius + Math.cos(angle) * radius;
	var Y2_ = radius + Math.cos(angle) * radius;
	canvas_span.innerHTML = Math.round((wave.height - (Y1_ + Y2_) / 2) / wave.height * 100) + '%';
	ctx.moveTo(X1,Y1);
	ctx.bezierCurveTo(wave.width/2,Y1,wave.width/2,Y2,X2,Y2);
	ctx.arc(wave.width/2,wave.height/2,radius,0.5*Math.PI - angle - rightDeltaHeight,0.5*Math.PI + angle + leftDeltaHeight);
	ctx.closePath();
	ctx.fill();
	if((angle + leftDeltaHeight) > Math.PI && (angle + rightDeltaHeight) > Math.PI) return;
	requestAnimFrame(loop);
}

loop();