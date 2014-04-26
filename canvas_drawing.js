window.onload = function () {


function RandomCanvas ( canvasId ) {
	this.canvas = document.getElementById( canvasId )
	this.context = this.canvas.getContext( "2d" )
};

RandomCanvas.prototype = {
	drawWithWords: function ( stanza ) {
			this.context.strokeStyle = "#ff00dd";
			this.context.moveTo( stanza[ 0 ].charCodeAt(), stanza[ 0 ].charCodeAt() );
		for ( var x = stanza.length - 1; x >= 0; x-- ) {
			x_coord = stanza[ x ].charCodeAt();
			this.context.lineTo( x_coord, (Math.random()*150) );
			this.context.stroke();
		}
	},
};

var my_canvas = new RandomCanvas ( "yo" ) ;

var myStanza =  prompt( "What words would you like to scribble? Example: 'This is just to say'" ) ;
my_canvas.drawWithWords( myStanza );

};