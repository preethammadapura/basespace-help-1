$(function() {
    $.ajax({
		url:"https://api.basespace.illumina.com/v1pre3/users/current", 
		dataType: "jsonp",
		success: function (result) {
			$("#bsh-user-name").html(result.Response.Name);
			$("#bsh-gravatar").attr("src", result.Response.GravatarUrl);
		},
		error: function (result) {
			$("#bsh-account-dropdown").toggle();
			$("#bsh-account-signin").css("display","block");
		}
	});
});