window.onload = function () {


function RandomCanvas ( canvasId ) {
	this.canvas = document.getElementById( canvasId )
	this.context = this.canvas.getContext( "2d" )
};

RandomCanvas.prototype = {
	drawWithWords: function ( stanza ) {
			this.context.strokeStyle = "#ff00dd";
		for ( var x = stanza.length - 1; x >= 0; x-- ) {
			x_coord = stanza[ x ].charCodeAt();
			this.context.moveTo( x_coord, 20 );
			this.context.lineTo( x_coord, 70 );
			this.context.stroke();
		}
	},
};

var my_canvas = new RandomCanvas ( "yo" ) ;

var snazzyGradient = my_canvas.context.createLinearGradient( 0, 0, 290, 0 );
snazzyGradient.addColorStop( 0, "pink" );
snazzyGradient.addColorStop( 1, "black" );
my_canvas.context.fillStyle = snazzyGradient;
my_canvas.context.fillRect( 0, 0, 290, 150 );

var myStanza =  "This is just to say" ;
my_canvas.drawWithWords( myStanza );

};