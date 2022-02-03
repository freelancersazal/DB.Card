$(function () {
    
    "use strict";
    
//=========MENU FIX JS=========   
if($('.main_menu').offset() != undefined){
  var navoff = $('.main_menu').offset().top;
  $(window).scroll(function () {
     var scrolling = $(this).scrollTop();

     if (scrolling > navoff) {
         $('.main_menu').addClass('menu_fix');
     } else {
         $('.main_menu').removeClass('menu_fix');
     }
  });
}

 
    
    
//=====BAR FILLER JS=====
$(document).ready(function(){

	$('#bar1').barfiller({ barColor: '#284cd3', duration: 3000 });
	$('#bar2').barfiller({ barColor: '#284cd3', duration: 3000 });
	$('#bar3').barfiller({ barColor: '#284cd3', duration: 3000 });
	$('#bar4').barfiller({ barColor: '#284cd3', duration: 3000 });
});


    
//=========VENOBOX JS=========   
$('.venobox').venobox();


    
    
//*=====TESTIMONIAL SLIDER===== 
    
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        vertical: true,
        
       responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        }
       ]
    });
	  
    
    
    
    
//=========REVIEW SLIDER=========   
    
$('.rev_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
   ]
});
	  
	  
    
//=========COUNTER JS=========   
$('.counter').countUp();
    
    

    
//===AOS Animation==== 
AOS.init();
    
    
    
//=======SELECT2====== 
$(document).ready(function() {
    $('.select_2').select2();
});
    

    
    
//*=====TESTIMONIAL SLIDER===== 
    
    $('.user_test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        
       responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        }
       ]
    });
	  
    
    
//*==========USER DETAILS 3 MENU==========  
$('.menu_icon').on('click', function(){
        $('.side_menu').addClass('.menu_show');
    });
        
    $('.close_icon').on('click', function(){
        $('.side_menu').removeClass('.menu_show');
});
    
    
    
/*==========USER DETAILS 2 MENU ==========*/   
    $('.menu_btn').on('click', function(){
        $('.side_menu_2').toggleClass('.menu_slide');
    });
        
    
    $('.menu_btn').on('click', function(){
        $('#arrow_icon').toggleClass('.btn_roatet');
    });
    
    
     $('.menu_btn').on('click', function(){
        $('.hide_name').toggleClass('.show_name');
    });
    
    
     $('.menu_btn').on('click', function(){
        $('.side_menu_2').toggleClass('.show_menu_2');
    });
    
    
    
    
//*==========SCROLL BUTTON==========  
    $('.scroll_btn').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });
    
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 300){
            $('.scroll_btn').fadeIn();
           }
        
        else{
            $('.scroll_btn').fadeOut();
        }
    });





//*==========ISOTOPE============== 
var $grid = $('.grid').isotope({});

$('.portfolio_filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

//active class
$('.portfolio_filter button').on("click", function (event) {

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();

});  
    






        
    
    
    

});
