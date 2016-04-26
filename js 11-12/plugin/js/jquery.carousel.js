(function($){
$.fn.myCarousel = function(){

	var el = $(this);

	var size = el.children().size();	
	var panelSize = el.width();
	var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) );

	el.css( {
		"transform": "rotateY(0deg) translateZ(-" + translateZ + "px)"
	})

	var rotateY = 0;
	var rotate_int = 0;
	var ry =  360 / size;
	var box = 0;

	function animate_slider() {
		rotateY = ry * rotate_int;
		
		for( i = 0; i < size; i++ ) {
			var z = ( rotate_int * ry ) + ( i * ry );		
			el.children(".slide:eq(" + i + ")").css({
				"transform": "rotateY(" + z + "deg) translateZ(" + translateZ + "px)"
			});
		}
		
		rotateY = 0;
		box = 0; 
	}

	animate_slider();

	$(".next").on("click", function() {
		rotate_int--;
		animate_slider();
	});

	$(".prev").on("click", function() {
		rotate_int++;
		animate_slider();
	});

}
})(jQuery);

