
var url = "https://api.incylabs.com/syncJDBC";

$("input#ctaPhone").on("keyup change", function() {
   validatePhone('cta');         
});

$("input#demoPhone").on("keyup change", function() {
   validatePhone('demo');         
});

$("input#rqtPhone").on("keyup change", function() {
   validatePhone('rqt');
});

function validatePhone(field){
  $e = $("input#" + field + "Phone");
  var t;
  t = void 0,
    t = $("input#" + field + "Phone").intlTelInput("isValidNumber");

    if(t==false){
        if(!$e.next('div.popover:visible').length){
            $e.popover('show');
        }

        return false;
    } else{
        $e.popover('hide');

        return true;
    }
}

/*Document Ready*//////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
    'use strict';

$(function () {
    $('#datetimepicker1').datetimepicker({
        minDate: new Date(),
        format: 'YYYY-MM-DD',
    });
});

$(function () {
    $('#datetimepicker2').datetimepicker({
        format: 'LT',

    });
});

// @https://github.com/jackocnr/intl-tel-input

$("input[type='tel']").intlTelInput({
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



$('form#frmCta').submit(function (submitEvt){
    if(validatePhone('cta')){

      var name = $('#ctaName').val();
      var email = $('#ctaEmail').val();
      var countryCode = $("input#ctaPhone").intlTelInput("getSelectedCountryData").iso2.toUpperCase();
      var telephone = $("input#ctaPhone").intlTelInput("getNumber");

      var time = Date.now();
      var columns = ["name", "email", "country_code", "phone", "utm_source", "utm_content"];
      var values = [name, email, countryCode, telephone, "website", "call-to-action"];

      var inserts = [{columns: columns, tableName: "subscriber", values: values}]
      var transactions = [{inserts:inserts}];

      var objJSON = new Object;
      objJSON.transactions = transactions;
      objJSON.databaseName = "incy";

      var strJSON = JSON.stringify(objJSON);

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        success: function(){
                swal(
                  'Thank you!',
                  "We'll get in touch with you within 48 hours.",
                  'success')
              },

        error: function(){
          swal(
            'Something went wrong!',
            "Administrators notified. They'll fix this issue soon.",
            'error'
          )
        },
        "processData": false,
        "data": JSON.stringify(objJSON),
      };

      $.ajax(settings).done(function (response) {
        console.log(JSON.stringify(response));
      });

    }

    submitEvt.preventDefault();
});

$('form#frmDemo').submit(function (submitEvt2){
  if(validatePhone('demo')){
        

        var name = $('#demoName').val();
        var email = $('#demoEmail').val();
        var countryCode = $("input#demoPhone").intlTelInput("getSelectedCountryData").iso2.toUpperCase();
        var telephone = $("input#demoPhone").intlTelInput("getNumber");

        var date = $('#datetimepicker1').data().date
        var time = moment($('#datetimepicker2').data().date, 'HH:mm A').format("HH:MM");

        var preferredTime = date + " " + time;

        var time = Date.now();
        var columns = ["name", "email", "country_code", "phone", "utm_source", "utm_content", "preferred_time"];
        var values = [name, email, countryCode, telephone, "website", "demo", preferredTime];

        var inserts = [{columns: columns, tableName: "subscriber", values: values}]
        var transactions = [{inserts:inserts}];

        var objJSON = new Object;
        objJSON.transactions = transactions;
        objJSON.databaseName = "incy";

        var strJSON = JSON.stringify(objJSON);

        console.log(strJSON);

        $('#demo').modal('hide');

        var settings2 = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },

        success: function(){
              setTimeout(function (){
                swal(
                  'Thank you!',
                  "We'll get in touch with you within 48 hours.",
                  'success')
              }, 500);
        },

        error: function(){
            setTimeout(function (){
              swal(
                'Something went wrong!',
                "Administrators notified. They'll fix this issue soon.",
                'error'
              )
            }, 500);
        },

        "processData": false,
        "data": JSON.stringify(objJSON),
      };

      $.ajax(settings2).done(function (response) {
        console.log(JSON.stringify(response));
      });

    }

      submitEvt2.preventDefault();

});


$('form#frmRqt').submit(function (submitEvt3){
    if(validatePhone('rqt')){
        
        var name = $('#rqtName').val();
        var email = $('#rqtEmail').val();
        var countryCode = $("input#rqtPhone").intlTelInput("getSelectedCountryData").iso2.toUpperCase();
        var telephone = $("input#rqtPhone").intlTelInput("getNumber");

        var columns = ["name", "email", "country_code", "phone", "utm_source", "utm_content"];
        var values = [name, email, countryCode, telephone, "website", "trial"];

        var inserts = [{columns: columns, tableName: "subscriber", values: values}]
        var transactions = [{inserts:inserts}];

        var objJSON = new Object;
        objJSON.transactions = transactions;
        objJSON.databaseName = "incy";

        var strJSON = JSON.stringify(objJSON);

        console.log(strJSON);

        $('#request').modal('hide');

        var settings3 = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },

        success: function(){
              setTimeout(function (){
                swal(
                  'Thank you!',
                  "We'll get in touch with you within 48 hours.",
                  'success')
              }, 500);
        },

        error: function(){
            setTimeout(function (){
              swal(
                'Something went wrong!',
                "Administrators notified. They'll fix this issue soon.",
                'error'
              )
            }, 500);
        },

        "processData": false,
        "data": JSON.stringify(objJSON),
      };

      $.ajax(settings3).done(function (response) {
        console.log(JSON.stringify(response));
      });

    }

      submitEvt3.preventDefault();

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