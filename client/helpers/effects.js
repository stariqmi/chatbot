Meteor.startup(function() {

	// Event handler for the create button
	$(".create_button").click(function() {

		// Extracting the value of the input fields 
		var name = $(".name_input").val();
		var pwd = $(".pwd_input").val();

		// Validation
		if( name == "" ) {
			$(".error p").text("Please enter a name for your chatbot");
			$(".error").fadeIn();
		}
		else if( pwd == "" ) {
			$(".error p").text("Please enter a password for your chatbot");
			$(".error").fadeIn();
		}

		else {
			var bot_name = name.replace(" ", "_");
				
			var existing_bots = Chatbots.find({name: bot_name}).fetch();
			console.log(existing_bots.length);

			if(existing_bots.length != 0) {
				var message  = "A chatbot by this name already exists";
				$(".error p").text(message);
				$(".error").fadeIn();
			}
			else {
				Chatbots.insert({
					name: bot_name,
					password: pwd
				})
				$(".error").css("background-color", "green");
				var message  = "The url for your chatbot is chatbot.meteorapp.com/" + bot_name;
				$(".error p").text(message);
				$(".error").fadeIn();	
			}
			
		}
	})
})