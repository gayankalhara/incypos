jQuery(function ($) {

    'use strict';
	
	/*==============================================================*/
    // Table of index
    /*==============================================================*/

    /*==============================================================
    # Menu add class
    # Magnific Popup
    # WoW Animation
    ==============================================================*/
	
	// ----------------------------------------------
    // # Demo Chooser
    // ----------------------------------------------

    (function() {

		$('.demo-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.demo-chooser').toggleClass('opened');
		})

    }());
	
	/*==============================================================*/
    // # Preloader
    /*==============================================================*/
    
    (function () {
        $(window).load(function(){         
            $('.preloader').fadeOut('slow',function(){$(this).remove();});       
        });

    }());

    (function() {
        var t = $(".dropdown"),
            e = t.find('[class*="__toggle"]'),
            i = t.find('[class*="__menu"]'),
            s = $(".gateway-list__item"),
            n = $(".not-supported"),
            o = $(".view-all"),
            r = {
                worldpay: ["US", "AU", "CA", "CH", "DE", "DK", "ES", "FR", "GB",
                    "HK", "IT", "JP", "NZ", "NO", "SG", "SE", "US", "ZA"
                ],
                recurly: ["INT"]
            },
            a = function(t) {
                var e = [];
                for (var i in r)
                    for (var s = 0; s < r[i].length; s++)
                        if (-1 !== r[i].indexOf(t.toUpperCase())) {
                            e.push(i);
                            break
                        }
                return e
            },
            l = function(t) {
                var e = a(t),
                    i = 0;
                s.each(function() {
                    var t = $(this),
                        s = t.data("gateway");
                    e.indexOf(s) >= 0 ? (t.show(), i++) : t.hide()
                }), "all" == t && s.show(), 0 === i ? n.show() : n.hide()
            },
            h = function() {
                i.removeClass("dropdown__menu--show")
            },
            c = function() {
                i.toggleClass("dropdown__menu--show")
            },
            u = function(t, i) {
                "other" === i && (i = "other", t = "Select a country"), e.html(
                    '<span class="country-flag country-' + i + '"></span> ' +
                    t), l(i)
            },
            d = function(t) {
                t.preventDefault(), u("Select a country", "all"), n.hide()
            },
            p = function(t) {
                t.preventDefault(), c()
            },
            f = function(t) {
                var e = $(t.currentTarget),
                    i = e.data("filter-by");
                t.preventDefault(), u(e.text(), i), h()
            },
            g = function() {
                e.on("click", p), i.on("click", "a", f), o.on("click", d), u(
                    "Sri Lanka", "lk")
            };
        t.length > 0 && g()
    }());
	
	
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
			if(windowWidth > 767 ){
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

$('form').submit(function ()
    {
        var columns = ["name", "contact_number", "email", "intention", "status"];
        var values = ["Gayan", "076-6987229", "gayan.csnc@gmail.com", "call-to-action", "new"];

        var inserts = [{columns: columns, tableName: "customer", values: values}]
        var transactions = [{inserts:inserts}];

        var objJSON = new Object;
        objJSON.transactions = transactions;
        objJSON.databaseName = "incy";

        var strJSON = JSON.stringify(objJSON);

        var url = "http://api.incylabs.com/sync";

        var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://api.incylabs.com/sync",
		  "method": "POST",
		  "useDefaultXhrHeader": "false",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache",
		    "postman-token": "432d82e6-3f4a-6053-890d-69618a53e8ac"
		  },
		  "processData": false,
		  "data": "{\"transactions\":[{\"inserts\":[{\"columns\":[\"name\",\"contact_number\",\"email\",\"intention\",\"status\"],\"tableName\":\"customer\",\"values\":[\"Gayan\",\"076-6987229\",\"gayan.csnc@gmail.com\",\"call-to-action\",\"new\"]}]}],\"databaseName\":\"incy\"}"
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});

        // $.ajaxSetup({
        //     dataType    :"raw", // all requests should respond with json string by default
        //     ContentType: "application/json",
        //     type: "POST",
        //     headers:  {'Access-Control-Allow-Headers' : 'Authorization, Content-Type' },
        // });

        // $.ajax ({
        //     url: url,
        //     data: JSON.stringify(objJSON),
        //     success: function(data){
        //         swal(
        //           'Thank you!',
        //           "We'll get in touch with you as quickly as possible!",
        //           'success'
        //         )

        //         console.log("data");
        //     }
        // });

        return false;
    });

