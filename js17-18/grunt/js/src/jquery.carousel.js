
(function ($) {
'use strict'

$.fn.myCarousel = function(options) {
 
        
        var settings = $.extend({
            // Carousel default settings.
            slidetime: 5000,
            effect: 'fade',
          	arrows: 'show',
          	arrowSize: '60'
        }, options);
      
      	
 				this.css({
         'position': 'relative',
         'list-style': 'none',
         'padding': '0'
        });
    
        this.find('li').css({
          'display': 'none',
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'transition': 'left .7s ease-in, transform .7s ease-in'
        });
    
      	this.find('li').last().css({
          'display': 'block'
        })

	// show all images after timeout so that page loads cleaner and faster
	var $carousel = this
    setTimeout(function() {
		$carousel.find('li').css({
			'display': 'block',
			'z-index': '100'
		});
	}, 200)
	
	// start carousel & effects
	var numberOfLis = this.find('li').length;
	var count = numberOfLis;
	var sliderTimeout;
	
	function autoslide() {
		sliderTimeout =
		setInterval(function(){
			var $currentChild = $carousel.find('li:nth-child(' + count + ')')
      if (settings.effect == 'fade') {
        $currentChild.fadeOut('slow', function() {
          $currentChild.css({
            'z-index': (parseInt($currentChild.css('z-index')) - 1),
            'display': 'block'
          });
        });
      } else if (settings.effect == 'blind'){
        $currentChild.slideUp('slow', function() {
          $currentChild.css({
            'z-index': (parseInt($currentChild.css('z-index')) - 1),
            'display': 'block'
          });
        });
      } else if (settings.effect == 'slide') {
        $currentChild.css('left', '-1000px')
        $currentChild.fadeOut('slow', function() {
          $currentChild.css({
            'z-index': (parseInt($currentChild.css('z-index')) - 1),
            'display': 'block',
            'left': '0'
          });
        });
      } else if (settings.effect == 'shrink') {
        $currentChild.css({
          'transform': 'scale(0)'
        })
        $currentChild.fadeOut('slow', function() {
          $currentChild.css({
            'z-index':(parseInt($currentChild.css('z-index')) - 1),
            'display': 'block',
            'transform': 'scale(1)'
          });
        });
      }
			if (count == 1) { 
				count = numberOfLis
			} else {
				count--
			}
		}, settings.slidetime)
	
	} 
	

	setTimeout(function() {
		autoslide() 
	}, 500)
	
    
  // control buttons
  function prevnext() {
    if(($carousel.find('li img').length) && ($carousel.find('li img').last().height() == 0)) {
      setTimeout(function() {
        prevnext()
      }, 75)
    	
    } else if (settings.arrows == 'show') {
      $carousel.append('<div class="slide-next">&#8667;</div><div class="slide-prev">&#8666;</div>')
      var theHeight = $carousel.find('li').last().height()
      $('.slide-next').css({
          'top': ((theHeight / 2) - (settings.arrowSize / 2)),
          'position': 'absolute',
          'opacity': '0.6',
          'right':(settings.arrowSize / 10) + 'px',
          'z-index': '101',
          'cursor': 'pointer',
          'font-size': settings.arrowSize + 'px',
          'text-shadow': '1px 1px 1px #000'
       })
      $('.slide-prev').css({
          'top':((theHeight / 2) - (settings.arrowSize / 2)),
          'position': 'absolute',
          'opacity': '0.6',
          'left': (settings.arrowSize / 10) + 'px',
          'z-index': '101',
          'cursor': 'pointer',
          'font-size': settings.arrowSize + 'px',
          'text-shadow': '1px 1px 1px #000'
       })
      
            $('.slide-prev, .slide-next').on('click',function() {
              clearInterval(sliderTimeout); // reset the timer on the autoslider
              if ($(this).hasClass('slide-next')) { // if it was the next button
                $carousel.find('li:nth-child(' + count + ')').css('left', '-1000px')
                $carousel.find('li:nth-child(' + count + ')').fadeOut('slow', function() {
                  $(this).css({
                    'display': 'block',
                    'left': '0',
                    'z-index': (parseInt($(this).css('z-index')) - 1)
                  })
                })
                if (count == 1) { 
                  count = numberOfLis
                } else {
                  count--
                }
              } else {  // if it was the prev button
                $carousel.find('li:nth-child(' + count + ')').css('left', '1000px')
                $carousel.find('li:nth-child(' + count + ')').fadeOut('slow', function() {
                  $(this).css({
                    'display': 'block',
                    'left': '0',
                    'z-index': (parseInt($(this).css('z-index')) - 1)
                  })
                })
                if (count == 1) { 
                  count = numberOfLis
                } else {
                  count--
                }
              }
              setTimeout(function() {
                autoslide(); // restart the autoslider
              }, 500)
            }); 

    }
  }
	prevnext();
  
	return this; 
	};

})(jQuery);