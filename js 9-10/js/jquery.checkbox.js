'use strict'

function changeCheck(el) {
     var el = el;
     var input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		     el.css("background-position","-40px 0");
         input.attr("checked", true)
	} else {
		el.css("background-position","0 0");
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el) {
  var el = el;
	var input = el.find("input").eq(0);
  if(input.attr("checked")) {
		el.css("background-position","-40px 0");
	}
     return true;
}

$(function() {
  $(".niceCheck").on('click', function() {
    changeCheck($(this));
  });
  $(".niceCheck").each(function() {
     changeCheckStart($(this));
  });

});
