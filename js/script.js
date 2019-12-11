$(document).ready(function(){
	$('#icon').click(function() {
		$('#icon').toggleClass('plmenu__active');
		$('#side').toggleClass('sidemenu__active');
		$('#nav').toggleClass('navbar__offset');
		$('#main').toggleClass('main__offset');
		$('.plcall__container').toggleClass('plcall__container__hidden');
		});
	$('#callorder').click(function() {
		$('.modal__background').css('display', 'block');
	});
	$('.modalform__wrap').click(function() {
		$('.modal__background').css('display', 'none');
	});
	$('#send-message').click(function() {
		$('.success__background').css('display', 'block');
	});
	$('.successform__wrap').click(function() {
		$('.success__background').css('display', 'none');
	});
	$('#success-link').click(function() {
		$('.success__background').css('display', 'none');
		$('.modal__background').css('display', 'none');
	});
	
	$('.plcall__container').click(function() {
		$('.modal__background').css('display', 'block');
	});
	
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		dots: true,
		
		navigation: true,
		slideSpeed: 300,
		parinationSpeed: 400
	});
});