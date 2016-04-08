'use strict'
$(function() {
  $('input').hover(function() {
    var $tooltip = $(this).next('div');
    $tooltip.addClass('tooltip');
  }, function(){
    $('input+div').removeClass('tooltip');
  });
  $('#show_help').on('click', function() {
    $('input+div').addClass('tooltip');
  });
});
