// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

(function($) {
        $.jInvertScroll(['.scroll'],    // an array containing the selector(s) for the elements you want to animate
            {
            height: 7000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
    }(jQuery));



(function($) {

//show and hide p22 head

    $("#p22head").hide();

$('#triangle').on('click',function(){
    $('#p22head').toggle(500);
})

//show and hide p33 head

    $("#p33head").hide();

$('#triangle33').on('click',function(){
    $('#p33head').toggle(500);
})

//show and hide p33 head

    $("#p33link").hide();

$('#triangle33').on('click',function(){
    $('#p33link').toggle(500);
})




//show and hide lions

$("#lions").hide();

$('#showlions').on('click',function(){
    $('#lions').fadeIn(500);
})

$('#showlionsACTIVE').on('click',function(){
    $('#lions').fadeOut(500);
})


$("#showlionsACTIVE").hide();

$('#showlions').on('click',function(){
    $('#showlionsACTIVE').fadeIn(1000);
        $('#showlions').fadeOut(1000);
})

$('#showlionsACTIVE').on('click',function(){
    $('#showlions').fadeIn(1000);
        $('#showlionsACTIVE').fadeOut(1000);
})

//show and hide who died

$("#whodiedlayer").hide();

$('#whodied').on('click',function(){
    $('#whodiedlayer').fadeIn(500);
})

$('#whodiedACTIVE').on('click',function(){
    $('#whodiedlayer').fadeOut(500);
})


$("#whodiedACTIVE").hide();

$('#whodied').on('click',function(){
    $('#whodiedACTIVE').fadeIn(1000);
        $('#whodied').fadeOut(1000);
})

$('#whodiedACTIVE').on('click',function(){
    $('#whodied').fadeIn(1000);
        $('#whodiedACTIVE').fadeOut(1000);
})


//show and hide who killed who

$("#whokilledlayer").hide();

$('#whokilled').on('click',function(){
    $('#whokilledlayer').fadeIn(500);
})

$('#whokilledACTIVE').on('click',function(){
    $('#whokilledlayer').fadeOut(500);
})


$("#whokilledACTIVE").hide();

$('#whokilled').on('click',function(){
    $('#whokilledACTIVE').fadeIn(1000);
        $('#whokilled').fadeOut(1000);
})

$('#whokilledACTIVE').on('click',function(){
    $('#whokilled').fadeIn(1000);
        $('#whokilledACTIVE').fadeOut(1000);
})



//show and hide who is mating


$("#whomatedlayer").hide();

$('#whomated').on('click',function(){
    $('#whomatedlayer').fadeIn(500);
})

$('#whomatedACTIVE').on('click',function(){
    $('#whomatedlayer').fadeOut(500);
})

$("#whomatedACTIVE").hide();

$('#whomated').on('click',function(){
    $('#whomatedACTIVE').fadeIn(1000);
        $('#whomated').fadeOut(1000);
})

$('#whomatedACTIVE').on('click',function(){
    $('#whomated').fadeIn(1000);
        $('#whomatedACTIVE').fadeOut(1000);
})

//show and hide who is inbreeding 


$("#inbreedinglayer").hide();

$('#inbreeding').on('click',function(){
    $('#inbreedinglayer').fadeIn(500);
})

$('#inbreedingACTIVE').on('click',function(){
    $('#inbreedinglayer').fadeOut(500);
})

$("#inbreedingACTIVE").hide();

$('#inbreeding').on('click',function(){
    $('#inbreedingACTIVE').fadeIn(1000);
        $('#inbreeding').fadeOut(1000);
})

$('#inbreedingACTIVE').on('click',function(){
    $('#inbreeding').fadeIn(1000);
        $('#inbreedingACTIVE').fadeOut(1000);
})

//toggle deer


$("#deer").hide();
$("#eatdeer").hover(
  function(){   
   $('#deer').toggle();
  } 
  
 );

//toggle orange peels

$("#orange").hide();
$("#manners").hover(
  function(){   
   $('#orange').toggle();
  } 
  
 );

//BEYOND: santa monica lion

$("#citylionpic").hide();
$("#citylion").hover(
  function(){   
   $('#citylionpic').toggle();
  } 
  
 );





//triangle scrolls then disappears

$(document).ready(function () {
  var top = $('#triangle').offset().top - parseFloat($('#triangle').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= 4500) {
      // if so, ad the fixed class
      $('#triangle').fadeOut(500);
    } else {
      // otherwise remove it
      $('#triangle').show();
    }
  });
});

$(document).ready(function () {
  var top = $('#p22head').offset().top - parseFloat($('#triangle').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= 4500) {
      // if so, ad the fixed class
      $("#p22head").fadeOut(500);
      $('#p22body').show();
    } else {
      // otherwise remove it
      
      $('#p22body').fadeOut();
    }
  });
});

//show mange head
$("#p22mange").hide();
$("#p22body").hover(
  function(){   
   $('#p22mange').toggle();
  } 
  
 );

}(jQuery));

//google analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58665956-1', 'auto');
  ga('send', 'pageview');


//beyond: stories

// $('#yourModalId').modality({
//     clickOffToClose: true
// // // OPTIONS
// });