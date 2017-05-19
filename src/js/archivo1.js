$(document).ready(function() {

	$('.btn-Unlock').click(function(event){

		$(this).addClass('animated shake').promise().done(function(){
			setTimeout(function(){
				$('.btn-Unlock').removeClass('animated shake');
			}, 500);

			setTimeout(function(){
				$('.container-header , .section-hour , .footer').addClass('hidden-lg hidden-md hidden-sm hidden-xs');
				$('.section-profile').removeClass('hidden-lg hidden-md hidden-sm hidden-xs');
				$('.img-circle-profile').addClass('animated fadeInRight');
				$('.profile h2 , .profile h3').addClass('animated fadeInRight');
			}, 600);
		});

	});
	

});