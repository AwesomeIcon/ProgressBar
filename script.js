function getCssStyle(obj,prop){
	if(obj.currentStyle){
		return obj.currentStyle[prop];
	}else{
		return document.defaultView.getComputedStyle(obj,null)[prop];
	}
}
window.onload = function(){
	progressbar = document.getElementById("progressbar");
	cube = document.getElementById("cube");
	outsideWidth = getCssStyle(cube,"width");
	setInterval(function(){
		innersideWidth = getCssStyle(progressbar,"width");
		percentage = parseFloat(innersideWidth) / parseFloat(outsideWidth) * 100;
		progressbar.innerHTML = Math.round(percentage) + "%";
	},100);
}
	