(function ($) {
    $(function () {
        $('.jcarousel').jcarousel({
                animation: 'slow',
                wrap: 'circular'
            })

            .jcarouselAutoscroll({
                interval: 5000,
                target: '+=1',
                autostart: true
            });


        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                'perPage': 1
            });
    });

})(jQuery);

$(function () {

    $('.accordion__header').click(function (e) {

        e.preventDefault();

        $(this).siblings('.accordion-body').slideToggle()
            .parent().toggleClass('active')
            .siblings().removeClass('active')
            .children('.accordion-body').slideUp();

    });

});
