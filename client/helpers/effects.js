Meteor.startup(function() {
	$(".create_button").click(function() {
		var name = $(".name_input").val();
		var pwd = $(".pwd_input").val();
		if( name == "" ) {
			$(".error p").text("Please enter a name for your chatbot");
			$(".error").fadeIn();
		}
		else if( pwd == "" ) {
			$(".error p").text("Please enter a password for your chatbot");
			$(".error").fadeIn();
		}

		else {
			$(".error").css("background-color", "green");
			var bot_name = name.replace(" ", "_");
			var message  = "Your chatbot's url is chatbot.meteorapp.com/" + bot_name;
			$(".error p").text(message);
			$(".error").fadeIn();
		}
	})
})