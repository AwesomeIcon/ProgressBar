function getCssStyle(obj,prop){
	if(obj.currentStyle){
		return obj.currentStyle[prop];
	}else{
		return document.defaultView.getComputedStyle(obj,null)[prop];
	}
}
window.onload = function(){
	var progressbar = document.getElementById("progressbar");
	var number = document.getElementById("number");
	var cube = document.getElementById("cube");
	var outsideWidth = getCssStyle(cube,"width");
	// var leftDiv = document.getElementById("leftDiv");
	// var rightDiv = document.getElementById("rightDiv");
	// var currentLeftRotate = getCssStyle(leftDiv,"transform");
	setInterval(function(){
		//console.log(getCssStyle(rightDiv,"transform"));
		// console.log(getCssStyle(leftDiv,"transform"));
		var innersideWidth = getCssStyle(progressbar,"width");
		var percentage = parseFloat(innersideWidth) / parseFloat(outsideWidth) * 100;
		progressbar.innerHTML = Math.round(percentage) + "%";
	},100);
	//
	// canvas
	var wave = document.getElementById("wave");
	var ctx = wave.getContext('2d');
	ctx.beginPath();
	ctx.fillStyle = "#f5f5f5";
	ctx.arc(100,100,100,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
}
