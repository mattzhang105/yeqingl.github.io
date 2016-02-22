$(document).ready(function(){ 
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos < 100) {
            $("body").css('background-color', '#AFE8FF');
        } else if(scroll_pos < 850) {
            $("body").css('background-color', '#a4d2f4');
        } else if(scroll_pos < 1200) {
            $("body").css('background-color', '#9cc1ec');
        } else {
            $("body").css('background-color', '#91abe1');
        }
    });

    $(function () {
        $('#backToTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#goToContact').click(function () {
            $('body,html').animate({
                scrollTop: $(document).height()
            }, 800);
            return false;
        });

        $('#goToAbout').click(function () {
            $('body,html').animate({
                scrollTop: 270
            }, 800);
            return false;
        });

        $('#goToWork').click(function () {
            $('body,html').animate({
                scrollTop: 900
            }, 800);
            return false;
        });
    });
});