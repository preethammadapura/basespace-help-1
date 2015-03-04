$(function() {
    $.ajax({
		url:"https://api.basespace.illumina.com/v1pre3/users/current", 
		dataType: "jsonp",
		success: function (result) {
			var res = result.Response.Name;
			res = res.split(" ");
			$("#bsh-user-name").html(res[0]);
			$("#bsh-gravatar").attr("src", result.Response.GravatarUrl);
		},
		error: function (result) {
			$("#bsh-account-dropdown").toggle();
			$("#bsh-account-signin").css("display","block");
		}
	});
});