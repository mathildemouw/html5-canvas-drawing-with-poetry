window.onload = function(){

function RandomCanvas(canvasId){
	this.canvas = document.getElementById(canvasId)
	this.context = this.canvas.getContext("2d")
}

var my_canvas = new RandomCanvas("yo");

var snazzyGradient = my_canvas.context.createLinearGradient(0, 0, 290, 0);
snazzyGradient.addColorStop(0, "pink");
snazzyGradient.addColorStop(1, "blue");
my_canvas.context.fillStyle = snazzyGradient;
my_canvas.context.fillRect(0, 0, 290, 150)


}