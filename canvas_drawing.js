window.onload = function(){

function draw(canvasId) {
	my_canvas = document.getElementById(canvasId); //ack, need var or no?  I forgot everything!
	my_context = my_canvas.getContext("2d");
}

draw("yo");
// later, could make an awesome function to pass in any canvas and give it a super cool gradient
var snazzyGradient = my_context.createLinearGradient(0, 0, 290, 0);
snazzyGradient.addColorStop(0, "pink");
snazzyGradient.addColorStop(1, "blue");
my_context.fillStyle = snazzyGradient;
my_context.fillRect(0, 0, 290, 150)


}