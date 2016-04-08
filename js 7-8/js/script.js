'use strict'
$(function() {

  /* считаем количество табов */
  var tabsCount = $('form').children().length;

  /* текущий таб */
  var current = 1;

  /* суммируем и сохраняем ширину каждой формы
  итоговая сумма будет шириной всех форм */
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

  /* показываем табы */
  $('#navigation').show();

  /* формы двигаются по клику на таб */
  $('#navigation a').on('click', function(e) {
    var $this = $(this);
    $this.closest('ul').find('li').removeClass('selected');
    $this.parent().addClass('selected');

    /*сохраняем позицию ссылки в переменной*/
    current = $this.parent().index() + 1;

    /*анимация - слайд на след. или соответвующую форму
    Порядок табов в навиганции соответсвует порядку форм */
    $('#tabs').stop().animate( {
      marginLeft: '-' + widths[current - 1] + 'px'
    });
    e.preventDefault();
  });
});
