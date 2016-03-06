function getCssStyle(obj,prop){
	if(obj.currentStyle){
		return obj.currentStyle[prop];
	}else{
		return document.defaultView.getComputedStyle(obj,null)[prop];
	}
}
window.onload = function(){
	progressbar = document.getElementById("progressbar");
	number = document.getElementById("number");
	cube = document.getElementById("cube");
	outsideWidth = getCssStyle(cube,"width");
	// leftDiv = document.getElementById("leftDiv");
	// rightDiv = document.getElementById("rightDiv");
	// currentLeftRotate = getCssStyle(leftDiv,"transform");
	setInterval(function(){
		//console.log(getCssStyle(rightDiv,"transform"));
		// console.log(getCssStyle(leftDiv,"transform"));
		innersideWidth = getCssStyle(progressbar,"width");
		percentage = parseFloat(innersideWidth) / parseFloat(outsideWidth) * 100;
		progressbar.innerHTML = Math.round(percentage) + "%";
	},100);
}
