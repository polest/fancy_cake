//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
		
    if ($(this).scrollTop() > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		//$(".navbar.navbar-default.navbar-fixed-top").addClass("custom-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		//$(".navbar.navbar-default.navbar-fixed-top").removeClass("custom-collapse");
    }	
	
});


