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
	setInterval(function(){
		var innersideWidth = getCssStyle(progressbar,"width");
		var percentage = parseFloat(innersideWidth) / parseFloat(outsideWidth) * 100;
		progressbar.innerHTML = Math.round(percentage) + "%";
	},100);
}
