window.onload = function () {

function RandomCanvas ( drawhere ) {
	this.canvas = document.getElementById( drawhere )
	this.context = this.canvas.getContext( "2d" )
};

RandomCanvas.prototype = {
	drawWithWords: function ( stanza ) {
			this.setLineColor();
			this.context.moveTo( stanza[ 0 ].charCodeAt(), stanza[ 0 ].charCodeAt() );
		for ( var x = stanza.length - 1; x >= 0; x-- ) {
			x_coord = stanza[ x ].charCodeAt();
			this.context.lineTo( x_coord, (Math.random()*150) );
			this.context.stroke();
		}
		document.getElementById( "youdrew" ).innerHTML = stanza;
	},

	setLineColor: function () {
		this.context.strokeStyle = "#FF1493";
	},

};

var my_canvas = new RandomCanvas ( "drawhere" ) ;

var myStanza =  prompt( "What words would you like to scribble? Example: 'This is just to say'" ) ;
my_canvas.drawWithWords( myStanza );

};
