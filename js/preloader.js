$(document).ready(function () {
	setTimeout(function () {
		$('body').addClass('loaded');
		$('nav').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 800);
});