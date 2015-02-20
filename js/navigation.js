$('#sidenav-toggle').click(function(e) {
	e.preventDefault();
	$("#sidenav-list").slideToggle("fast");
	$('.menu-box').toggleClass("menu-box-selected");
	$('.menu-icon').toggleClass("menu-icon-selected");
  	$('.vertical-line').toggleClass("vertical-line-toggle");
}); 
