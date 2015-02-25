$(function() { 
	$('#sidenav-toggle').click(function(e) {
		console.log("Click~!");
		e.preventDefault();
		$("#sidenav-list").slideToggle("fast");
		$('.menu-box').toggleClass("menu-box-selected");
		$('.menu-icon').toggleClass("menu-icon-selected");
	  	$('.vertical-line').toggleClass("vertical-line-toggle");

	  	$("#content-column").toggleClass("col-md-12").toggleClass("col-lg-12").toggleClass("col-md-10").toggleClass("col-lg-10");
	  	$("#sidenav-column").toggle();
	  	$('.bsh-breadcrumb-left').toggleClass('bsh-breadcrumb-left-toggle');

	}); 
});
