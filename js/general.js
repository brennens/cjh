;(function ($){
    $(function () {

        $('.bs-wrap-menu-icon').click(function(e){
            e.preventDefault();
            $('.bs-wrap').toggleClass('show-nav');
        });


        $('.nav-item, .fog button, .logo-mini').click(function(){
            var location = $(this).attr('data-scroll');
            scrollBody(location);
        });


        function scrollBody (location) {
            if(!$('html, body').is(':animated')){
                $('html, body').animate({
                    scrollTop: $(location).offset().top
                }, 800).promise().done(function(){
                    $('.bs-wrap').toggleClass('show-nav');
                });
            }
        }

        $('.bs-carousel').slick({
            infinite: true,
            speed: 1000,
            autoplay: true,
            slidesToShow: 1,
            prevArrow: $('.chevron-left'),
            nextArrow: $('.chevron-right')
        });

        $('.gallery[rel="group1"]').colorbox({
            maxWidth: '80%',
            maxHeigh: '80%',
            scrolling: false
        });

    });
})(jQuery);