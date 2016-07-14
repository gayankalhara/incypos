// @https://github.com/jackocnr/intl-tel-input

$("input#frmPhone").intlTelInput({
    geoIpLookup: function(callback) {
      $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    responsiveDropdown: true,
    initialCountry: "auto",
    preferredCountries: ["lk", "sg", "mv", "ar", "gb", "in", "id", "th"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});


$("input#frmPhone").on("keyup change", function() {
    $e = $("input#frmPhone");


    var t;
    t = void 0,
    t = $("input#frmPhone").intlTelInput("isValidNumber"),
    $("#phone").val(t);
    console.log(t);

    if(t==false){
        if(!$e.next('div.popover:visible').length){
            $e.popover('show');
        }
    } else{
        $e.popover('hide');
    }
    
            
});


$('form').submit(function (submitEvt){

    var time = Date.now();
    var columns = ["name", "email", "country_code", "phone", "utm_source", "utm_content"];
    var values = ["Gayan Kalhara", "gayan.csnc@gmail.com", "+94", "0766987229", "website", "call-to-action"];

    var inserts = [{columns: columns, tableName: "subscriber", values: values}]
    var transactions = [{inserts:inserts}];

    var objJSON = new Object;
    objJSON.transactions = transactions;
    objJSON.databaseName = "incy";

    var strJSON = JSON.stringify(objJSON);

    var url = "https://api.incylabs.com/sync";

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(objJSON),
    }

    $.ajax(settings).done(function (response) {
            swal(
              'Thank you!',
              "We'll get in touch with you within 48 hours.",
              'success'
            )

        var error = response.transactions[0].error;

        if (error == null){
            swal(
              'Thank you!',
              "We'll get in touch with you within 48 hours.",
              'success'
            )
        } else{
            swal(
              'Something went wrong!',
              "Administrators notified. They'll fix this issue soon.",
              'error'
            )
        }

      console.log(JSON.stringify(response));
    });

    submitEvt.preventDefault();
});


jQuery(function ($) {

    'use strict';

	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/

	 $(function(){
		 var navMain = $("#mainmenu");
		 navMain.on("click", "a", null, function () {
			 navMain.collapse('hide');
		 });
	 });


	/*==============================================================*/
    // Menu add class
    /*==============================================================*/
	(function () {
		function menuToggle(){
			var windowWidth = $(window).width();
			if(windowWidth > 1199 ){
				$(window).on('scroll', function(){
					if( $(window).scrollTop()>650 ){
						$('.navbar').addClass('navbar-fixed-top');
					} else {
						$('.navbar').removeClass('navbar-fixed-top');
					};
					if( $(window)){
						$('#home-three .navbar').addClass('navbar-fixed-top');
					}
				});
			}else{

				$('.navbar').addClass('navbar-fixed-top');

			};
		}

		menuToggle();
	}());

	$('#mainmenu').onePageNav({
		currentClass: 'active',
	});


	/*==============================================================*/
    // WoW Animation
    /*==============================================================*/
	new WOW().init();

	/*==============================================================*/
    // Owl Carousel
    /*==============================================================*/

	$("#team-slider").owlCarousel({
		pagination	: false,
		navigation:true,
		navigationText: [
		  "<span class='team-slider-left'><i class=' fa fa-angle-left '></i></span>",
		  "<span class='team-slider-right'><i class=' fa fa-angle-right'></i></span>"
		]
	});

	$("#screenshot-slider").owlCarousel({
		items : 2,
		pagination	: true,
	});

	/*==============================================================*/
    // Magnific Popup
    /*==============================================================*/

	(function () {
		$('.image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image'
		});
		$('.feature-image .image-link').magnificPopup({
			gallery: {
			  enabled: false
			},
			type: 'image'
		});
		$('.image-popup').magnificPopup({
			type: 'image'
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());



});





/*Document Ready*//////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
    'use strict';

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

    /** Feature Tabs (Changing screens of Tablet and Phone)
    *********************************************************/
  $('.feature-tabs .nav-tabs li a').on('click', function() {
      var currentPhoneSlide = $(this).data("phone");
      var currentTabletSlide = $(this).data("tablet");
      $(".devices .phone .screens li").removeClass("active");
      $(".devices .tablet .screens li").removeClass("active");
      $(currentPhoneSlide).addClass("active");
      $(currentTabletSlide).addClass("active");
  });

 //  /** Why is it Special - Autoswitching
    // *********************************************************/
    // if($('.feature-tabs .nav-tabs').length > 0) {
 //    var changeInterval = $('.feature-tabs .nav-tabs').data('interval');
    //  var tabCarousel = setInterval(function() {
    //         var tabs = $('.feature-tabs .nav-tabs > li'),
    //             active = tabs.filter('.active'),
    //             next = active.next('li'),
    //             toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    //         if ($('#scrHv:hover').length == 0) {
    //          toClick.trigger('click');
    //      }
    //   }, changeInterval);
    // }

    /** Graphs - Autoswitching
    *********************************************************/

  //   var changeInterval = 3000;
        // var tabsC = setInterval(function() {
     //        var tabsC = $('.autoS > li'),
     //            activeC = tabsC.filter('.active'),
     //            nextC = activeC.next('li'),
     //            toClickC = nextC.length ? nextC.find('a') : tabsC.eq(0).find('a');

     //            if ($('#ftrHv:hover').length == 0) {
     //             toClickC.trigger('click');
     //         }
     //  }, changeInterval);

    
    
    /** Custom Horizontal Scrollbar for Gallery/Blog (Home Page)
    **************************************************************/
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


});/*Document Ready End*/////////////////////////////////////////////////////////////