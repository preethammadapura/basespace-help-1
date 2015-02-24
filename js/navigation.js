$(function() { 
	$('#sidenav-toggle').click(function(e) {
		console.log("Click~!");
		e.preventDefault();
		$("#sidenav-list").slideToggle("fast");
		$('.menu-box').toggleClass("menu-box-selected");
		$('.menu-icon').toggleClass("menu-icon-selected");
	  	$('.vertical-line').toggleClass("vertical-line-toggle");
	}); 
});
