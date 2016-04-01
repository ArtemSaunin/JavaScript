$(function() {
  var tabsCount = $('form').children().length;
  var current = 1;
  var tabsWidth = 0;
  var widths = new Array();
  $('#tabs #form_item').each(function(i) {
    var $form_item = $(this);
    widths[i] = tabsWidth;
    tabsWidth += $form_item.width();
  });
  $('#tabs').width(tabsWidth);
  $('form').width(tabsWidth);
  $('form').children(tabsWidth);
  $('#navigation').show();
  $('#navigation a').on('click', function(e) {
    var $this = $(this);
    var prev = current;
    $this.closest('ul').find('li').removeClass('selected');
    $this.parent().addClass('selected');
    current = $this.parent().index() + 1;
    $('#tabs').stop().animate( {
      marginLeft: '-' + widths[current - 1] + 'px'
    }, 700, function() {
      if(current == tabsCount)
        validateTabs();
      else
        validateTabs(prev);
      $('form').children(':nth-child('+ parseInt(current) +')').find(':input:first').focus();
    });
    e.preventDefault();
  });

  // $('form > div').each(function() {
  //   var $div = $(this);
  //   $div.children(':last').find(':input').
  // });
});
