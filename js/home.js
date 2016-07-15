
$e = $("input#frmPhone");

$("input#frmPhone").on("keyup change", function() {
    

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

/*Document Ready*//////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
    'use strict';

$(function () {
    $('#datetimepicker1').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
});

$(function () {
    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });
});

// @https://github.com/jackocnr/intl-tel-input

$("input#frmPhone").intlTelInput({
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    responsiveDropdown: true,
    initialCountry: "lk",
    preferredCountries: ["lk", "sg", "mv", "ar", "gb", "in", "id", "th"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
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
          if( $(window).scrollTop()>710 ){
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
        "cache-control": "no-cache",
        "Access-Control-Allow-Origin": "https://www.incypos.com"
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


    /** Feature Tabs (Changing screens of Tablet and Phone)
    *********************************************************/
  $('.feature-tabs .nav-tabs li a').on('click', function() {
      var currentTabletSlide = $(this).data("tablet");
      $(".devices .tablet .screens li").removeClass("active");
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

});/*Document Ready End*/////////////////////////////////////////////////////////////