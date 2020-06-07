jQuery('.slab-vs a').click(function() { 
     jQuery('#CecutientWrapper').slideToggle('');
      jQuery('.wrapper').toggleClass('fx-tops'); 
     return false;
});




$(function(){
    $('a#ImageOff').click(function(){
        $('body').toggleClass( "no-image-fx" );   
         $('#ImageOff').toggleClass( "off-art" );  
    });
});


$(function(){
    $('#BlueStyle').click(function(){
        $('body').toggleClass( "blue-fx" );   
         $('body').removeClass( "green-fx" ); 
           $('body').removeClass( "black-fx" );         
    });
});


$(function(){
    $('#GreenStyle').click(function(){
        $('body').toggleClass( "green-fx" );
        $('body').removeClass( "blue-fx" );  
         $('body').removeClass( "black-fx" );     
    });
});

$(function(){
    $('#BlackStyle').click(function(){
        $('body').toggleClass( "black-fx" );   
         $('body').removeClass( "green-fx" );  
          $('body').removeClass( "blue-fx" );       
    });
});
$(function(){
    $('#WhiteStyle').click(function(){
        $('body').removeClass( "black-fx" );   
         $('body').removeClass( "green-fx" );  
          $('body').removeClass( "blue-fx" );       
    });
});

$(function(){
    $('#BigFonts').click(function(){
        $('body').toggleClass( "font-lage-fx" );   
         $('body').removeClass( "font-middle-fx" );        
    });
});


$(function(){
    $('#MediumFonts').click(function(){
        $('body').toggleClass( "font-middle-fx" );   
         $('body').removeClass( "font-lage-fx" );        
    });
});


$(function(){
    $('#SmallFonts').click(function(){
        $('body').removeClass( "font-lage-fx" );   
         $('body').removeClass( "font-middle-fx" );        
    });
});


$(function(){
    $('#CecutientOff').click(function(){
	    $('#CecutientOff').toggleClass( "off-art" ); 
        $('body').toggleClass( "font-lage-fx" );   
        $('body').removeClass( "font-middle-fx" );
         $('body').toggleClass( "black-fx" );   
         $('body').removeClass( "green-fx" );  
          $('body').removeClass( "blue-fx" );         
    });
});




jQuery('.dll').click(function() { 
     jQuery('.hide-xss').slideToggle(''); 
     jQuery('.dll').toggleClass("str-full");  
});



$(document).ready(function()
{
    if($(".card-i").height()>790){
        $(".card-i").addClass( "paused" ); 
    }
});



$(document).ready(function()
{
	$("#contentbox").keyup(function()
	{
		var box=$(this).val();
		var main = box.length *100;
		var value= (main / 250);
		var count= 250 - box.length;

		if(box.length <= 250)
		{
			$('#count').html(count);
			$('#bar').animate(
			{
				"width": value+'%',
			}, 1);
		}
		else
		{
			alert('Максимальное кол-во символов');
		}
		return false;
	});
});
	

   
    $(document).ready(function () {

            //main nav
            $(window).on('scroll load', function () {
                updateMainNav();
            });

            function updateMainNav() {
                if ($(window).scrollTop() >= 790) {
                    $('body').addClass('minimize-menu');
                } else {
                    $('body').removeClass('minimize-menu');
                }
            }

            $('.user-nav > a').on('click', function () {
                $('body').toggleClass('show-user-nav');
            });

            $(document).on('click', function (event) {
                $('body').removeClass('show-user-nav');
            });

            $('.collapse-main-nav').on('click', function () {
                if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
                return false;
            });

        });


	
	
	

 




    if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400">');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
        });

 
 

        


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 
 
 
 
 $(document).ready(function() {
  
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
     
    });

});





    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
    });
    
    
    
 
  // zoom off mobile
 
 document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);
 
 
 
 
 	(function($) {
		$(function() {
			$('.form-control, select, input[type="radio"], input[type="checkbox"]').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		
	if($(window).width() > 768) {

		$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});


} else { 
    // change functionality for larger screens
}



  
    
        $(document).ready(function() {
	        
	        
	        
	        

var xpaused = false;
var previous = 0;
var poh = true;
var pof = true;

$(".pause").on("click", function() {
	if( xpaused ) {
  	$(".slider").slick("play");
  } else {
  	$(".slider").slick("pause");
  }
  xpaused = !xpaused;
  $(this).toggleClass( "paused" );
});


$(".go").on("click", function() {
 	$(".slider").slick("prev");
});

$(".go2").on("click", function() {
 	$(".slider").slick("next");
});

$(".poh").on("click", function() {
 	$(".slider").slick("setOption", "pauseOnHover", !poh, true );
  poh = !poh;
  $(this).toggleClass( "paused" );
});

$(".pof").on("click", function() {
 	$(".slider").slick("setOption", "pauseOnFocus", !pof, true );
  pof = !pof;
  $(this).toggleClass( "paused" );
});


     $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: true,
});

        
            $('.modal').on('shown.bs.modal', function (e) {
      $('.slider').resize();
       
    })

    });
    



$(".imgl").click(
  function () {
    $(this).toggleClass("result_hover_p");
  }
);   

 $( function() {
    $( ".datepicker" ).datepicker();
  } ); 
	
	
initSample();
		





 $('.dspl-n').on('click', function () {
                $('.hide-stn').toggleClass('shows-nt');
            });
    
    
  
    
    
    $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  } );
  
  
  
   $( function() {
    $( ".tool" ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
  
  
  
   
 	if($(window).width() > 768) {


$(".scroller-b").mCustomScrollbar({
					axis:"y",			
					autoDraggerLength:false,
				
				});	


} else { 
    // change functionality for larger screens
}
	
  
  
  /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





$(document).ready(function() {
    $("#datepicker").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });


$(document).ready(function() {
    $("#datepicker2").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });
 
 
 $(document).ready(function() {
    $("#datepicker3").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });
 
 
 $(document).ready(function() {
    $("#datepicker4").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });

  jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Далее',

		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],

	  monthNamesShort: [ "Январь", "Феваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});			
	
	
	

	
	