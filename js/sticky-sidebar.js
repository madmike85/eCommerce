$(document).ready(function () {
    var $sticky = $('.sticky');
    var $stickyStopper = $('.sticky-stopper');

    if (!!$sticky.offset()) {
        var sidebarHeigth = $sticky.innerHeight();
        var stickyTop = $sticky.offset().top;
        var stickOffset = 10;
        var stopperPosition = $stickyStopper.offset().top;
        var stopPoint = stopperPosition - sidebarHeigth - stickOffset;
        var diff = stopPoint + stickOffset;

        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();

            if (stopPoint < windowTop) {
                $sticky.css({
                    position: 'absolute',
                    top: diff
                });
            } else if (stickyTop < windowTop + stickOffset) {
                $sticky.css({
                    position: 'fixed',
                    top: stickOffset
                });
            } else {
                $sticky.css({
                    position: 'absolute',
                    top: 'initial'
                });
            }
        });
    }
});