jQuery(document).ready(function($) {
    'use strict';
  $(window).load(function(){
    $('.scroller').mCustomScrollbar({
            axis:"x",
            theme:"dark",
            scrollInertia: 300,
            advanced:{autoExpandHorizontalScroll:true}
    });
  });


    /** Custom Vertical Scrollbar for Off-Canvas Navigation
    **************************************************************/
    var navBodyScroll = $('.nav-body .overflow');
  $(window).load(function(){
    navBodyScroll.height($(window).height() - $('.nav-head').height()-80);
    navBodyScroll.mCustomScrollbar({
                    theme:"dark",
                    scrollInertia: 300,
                    scrollbarPosition:"outside"
    });
  });
  $(window).resize(function(){
    navBodyScroll.height($(window).height() - $('.nav-head').height()-80);
  });

  

        /** Sticky Navbar and Footer
        *******************************************/
        $(window).on('load', function(){
            if($('.navbar-sticky').length > 0) {
                var waypoint = new Waypoint.Sticky({
                  element: $('.navbar-sticky')[0],
                handler: function(direction) {
                    if(direction == 'down') {
                      footer.addClass('footer-fixed-bottom');
                      intro.addClass('transparent');
                    } else {
                        footer.removeClass('footer-fixed-bottom');
                        intro.removeClass('transparent');
                    }
                  }
                });
            }
        });

});/*Document Ready End*/////////////////////////////////////////////////////////////