$(document).ready(function() {
	var scrollLink = $('.scroll');
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000 );
	})
})


$(window).scroll(function(){
	parallax();
})

function parallax(){
	if ($(window).width() > 1000 && $(window).height() > 720) {
		var wScroll = $(window).scrollTop();
			$('.logo-grande').css('margin-top',
			350+(wScroll*0.25)+'px');
	} else{
		var wScroll = $(window).scrollTop();
			$('.logo-grande').css('margin-top',
			30+(wScroll*0.04)+'vh');
	};
}


$(document).ready(function(){
	$('.text-bio').click(function(){
		$('.contenedor-bio').toggle(400);
		$('.text-bio').slideUp(400);
	})
})


$(document).ready(function(){
	$('.img-bio').click(function(){
		$('.contenedor-bio').toggle(400);
		$('.text-bio').fadeToggle(400);
	})
})

$(document).ready(function(){
	$('.contenedor-bio').click(function(){
		$('.text-bio').slideDown(400);
		$('.contenedor-bio').hide(400);
	})
})

$(document).ready(function(){
	$('.agradecimientos').click(function(){
		$('.aparecer').slideDown(400);
		$('.desaparecer').hide(400);
	})
})

$(document).ready(function(){
	$('.slider-video').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 300,
		cssEase: 'linear',
		asNavFor: '.slider-imagenes',
	});
	$('.slider-imagenes').slick({
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 5,
		asNavFor: '.slider-video',
		focusOnSelect: true,
		arrows: false,
		responsive: [
			{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				centerPadding: '12%',
				centerMode: true,
				arrows: false,
				}
    		},
    		{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerPadding: '32%',
				centerMode: true,
				arrows: false,
				}
    		},
    		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				arrows: true,
				}
    		}
    	]
	});
	$('.slider-tienda').slick({
		centerMode: true,
		centerPadding: '110px',
		slidesToShow: 3,
		focusOnSelect: true,
		arrows: false,
		asNavFor: '.slider-textotienda',
		responsive: [
			{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				centerPadding: '33%',
				centerMode: true,
				arrows: false,
				}
    		},
    		{
			breakpoint: 770,
			settings: {
				slidesToShow: 1,
				centerPadding: '25%',
				centerMode: true,
				arrows: false,
				}
    		},
    		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				arrows: true,
				}
    		}
    	]
	});
	$('.slider-textotienda').slick({
		centerMode: true,
		centerPadding: '110px',
		slidesToShow: 1,
		focusOnSelect: true,
		arrows: false,
		fade: true,
		speed: 300,
		asNavFor: '.slider-tienda',
	});
});


$(document).ready(function(){
	$("#textchange").click(function(){
		$("#textchange").text("¡Gracias por suscribrirte!");
		$("#textchange").addClass("clicked");
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 124 && $(window).width() > 1000) {
    	$('.menu').addClass('shrink');
    }
    else {
    $('.menu').removeClass('shrink');
    }
  });
});

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 124) {
    	$('.foot').addClass('footer');
    }
    else {
    $('.foot').removeClass('footer');
    }
  });
});