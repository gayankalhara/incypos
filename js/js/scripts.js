/*
 * Appica 2 HTML5 Theme v1.2
 * Copyright 2015 8Guild.com
 * All scripts for iOS Version
 */


/*Document Ready*//////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
	'use strict';

	// Cashing variables
	var intro = $('.intro');
	var content = $('.content-wrap');
	var footer = $('.footer');


	/* Disable default link behavior for dummy links that have href='#'
	*********************************************************************/
	$('a[href=#]').click(function(e){
		e.preventDefault();
	});


	// Checking with Modernizr if it is touch device
	// Touch Devices
	if (Modernizr.touch){

		// Window load event
		$(window).load(function() {
			/** Keeping Logo and Phone at the bottom of teh page
			**********************************************************/
			$('.intro .column-wrap').css('height', $(window).height());
		});

		// Window resize event
		$(window).resize(function() {
			/** Keeping Logo and Phone at the bottom of teh page
			**********************************************************/
			$('.intro .column-wrap').css('height', $(window).height());
		});

		/** Sticky Navbar
		*******************************************/
		$(window).on('load', function(){
			if($('.navbar-sticky').length > 0) {
				var sticky = new Waypoint.Sticky({
				  element: $('.navbar-sticky')[0]
				});
			}
		});

		// No-touch Devices
	} else {

		// Window load event
		$(window).load(function() {

			/** Keeping Logo and Phone at the bottom of teh page
			**********************************************************/
			$('.intro .column-wrap').css('height', $(window).height());

			/** Pushing Content down to the height equal to Intro height + height necessary to finish animation
			******************************************************************************************************/
			content.css('margin-top', intro.height()*1.5);

			/** Content 'margin-bottom' equals footer height to reveal footer
			********************************************************************************/
			if($('.fixed-footer').length > 0) {
				content.css('margin-bottom', footer.outerHeight());
			}

			// Animation delay for intro features
			$('.intro-features .icon-block').each(function(){
				var transDelay = $(this).data('transition-delay');
				$(this).css({'transition-delay': transDelay + 'ms'});
			});

			// Detecting various OS / devices / browsers and adding classes to <html>
			Detectizr.detect({detectScreen:false});
		});

		// Window resize event
		$(window).resize(function() {

			/** Keeping Logo and Phone at the bottom of teh page
			**********************************************************/
			$('.intro .column-wrap').css('height', $(window).height());

			/** Pushing Content down to the height equal to Intro section height + height necessary to finish animation
			*************************************************************************************************************/
			content.css('margin-top', intro.height()*1.5);

			/** Content 'margin-bottom' equals footer height to reveal footer
			********************************************************************************/
			if($('.fixed-footer').length > 0) {
				content.css('margin-bottom', footer.outerHeight());
			}
		});


		/** Animating Intro Section
		*********************************/
		$(window).scroll( function() {
	    if ($(window).scrollTop() > 15) {
	      intro.addClass('transformed');
	    } else {
	      intro.removeClass('transformed');
	    }
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

	} // Modernizr End


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

  /** Feature Tabs Autoswitching
	*********************************************************/
	if($('.feature-tabs .nav-tabs').length > 0) {
    var changeInterval = $('.feature-tabs .nav-tabs').data('interval');
		var tabCarousel = setInterval(function() {
	        var tabs = $('.feature-tabs .nav-tabs > li'),
	            active = tabs.filter('.active'),
	            next = active.next('li'),
	            toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

	        if ($('#scrHv:hover').length == 0) {
	        	toClick.trigger('click');
	    	}
	  }, changeInterval);
	}

	/** Features Autoswitching
	*********************************************************/

	
    // do something ;)

    var changeInterval = 3000;
		var tabsC = setInterval(function() {
	        var tabsC = $('.autoS > li'),
	            activeC = tabsC.filter('.active'),
	            nextC = activeC.next('li'),
	            toClickC = nextC.length ? nextC.find('a') : tabsC.eq(0).find('a');

	            if ($('#ftrHv:hover').length == 0) {
	        		toClickC.trigger('click');
	        	}
	  }, changeInterval);

	
	
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


	/** App Gallery
	*********************************************************/
	if($('.app-gallery a').length > 0) {
		$('.app-gallery a').magnificPopup({ 
		  type: 'image',
		  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		  gallery:{
		    enabled:true
		  },
		  zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it

		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function 

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
		    opener: function(openerElement) {
		      // openerElement is the element on which popup was initialized, in this case its <a> tag
		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		  }

		});
	}

	
	/** Gallery
	*********************************************************/
	// Images
	if($('.gallery-item.image-item').length > 0) {
		$('.gallery-item.image-item').magnificPopup({
			type:'image',
			gallery:{
		    enabled:true
		  },
			removalDelay: 300,
		  mainClass: 'mfp-fade'
		});
	}

	// Video
	if($('.gallery-item.video-item').length > 0) {
		$('.gallery-item.video-item').magnificPopup({
			type:'iframe',
			removalDelay: 300,
		  mainClass: 'mfp-fade'
		});
	}


	/** Portfolio Lightbox
	*********************************************************/
	if($('.popup-img').length > 0) {
		$('.popup-img').magnificPopup({
			type:'image',
			gallery:{
		    enabled:true
		  },
			removalDelay: 300,
		  mainClass: 'mfp-fade'
		});
	}


	/** Masony Grid (Isotope) + Filtering
	*********************************************************/
	$(window).load(function(){
		if($('.masonry-grid').length > 0) {
		  $('.masonry-grid').isotope({
			  itemSelector: '.item',
			  masonry: {
			    columnWidth: '.grid-sizer',
			    gutter: '.gutter-sizer'
			  }
		  });
		}
		if($('.portfolio-grid').length > 0) {
		  $('.portfolio-grid').isotope({
			  itemSelector: '.grid-item',
			  masonry: {
			    columnWidth: '.grid-sizer',
			    gutter: '.gutter-sizer'
			  }
		  });
		}
		if($('.filter-grid').length > 0) {
		  var grid = $('.filter-grid');
			$('.nav-filters').on( 'click', 'a', function(e) {
				e.preventDefault();
				$('.nav-filters li').removeClass('active');
				$(this).parent().addClass('active');
			  var filterValue = $(this).attr('data-filter');
			  grid.isotope({ filter: filterValue });
			});
		}
	});


	/** Pagination Slider
	*********************************************************/
	if($('.page-slider input').length > 0) {
		$('.page-slider input').slider({
			formatter: function(value) {
				return value;
			}
		});
	}


	/** Bar Charts
	*********************************************************/
	$(window).load(function(){
		$('.bar-charts .chart').each(function(){
			var percentage = $(this).data('percentage');
			$(this).find('.bar').css('height', percentage + '%');
		});
	});


	///////////////////////////////////////////////////////////////////////
	/////////  INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)  //////////////
	//////////////////////////////////////////////////////////////////////
	
	$(".scroll").click(function(event){		
		var $elemOffsetTop = $(this).data('offset-top');
		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1000, easing:'easeOutExpo'});
		event.preventDefault();
	});
	$('.scrollup').click(function(e){
		e.preventDefault();
		$('html').velocity("scroll", { offset: 0, duration: 1400, mobileHA: false });
	});
	

	//SCROLL-SPY
	// Cache selectors
	var lastId,
		topMenu = $(".scroll-nav"),
		topMenuHeight = topMenu.outerHeight(),
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight+200;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }
	});

});/*Document Ready End*/////////////////////////////////////////////////////////////