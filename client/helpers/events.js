Template.create_chatbot.events = {

	// Event handler for the create button
	'click .create_button': function() {
		$(".error p").css("color", "red");

		// Extracting the value of the input fields 
		var name = $(".name_input").val();
		
		// Validation
		if( name == "" ) {
			$(".error p").text("Please enter a name for your chatbot");
			$(".error").fadeIn();
		}
		else {
			var bot_name = name.replace(" ", "_");
				
			var existing_bots = Chatbots.find({name: name}).fetch();
			console.log(existing_bots.length);

			if(existing_bots.length != 0) {
				var message  = "A chatbot by this name already exists";
				$(".error p").text(message);
				$(".error").fadeIn();
			}
			else {
				Chatbots.insert({
					name: name,
					url: bot_name
				});
				$(".error p").css("color", "green");
				var message  = "The url for your chatbot is chatbot.meteor.com/" + bot_name;
				$(".error p").text(message);
				$(".error").fadeIn();	
			}
		}
	}
}

Template.chat_page.events =  {
	'click .set': function(event) {
		$(".new_name").slideDown();
	},

	'keyup .new_name_input': function(event) {
		if( event.which == 13 ) {
			var new_name = $('input.new_name_input').val();
			if( new_name != "") {
				$('.name').text(new_name);
				$('.set').text('edit');
				$('.new_name').slideUp();
			}
		}
	},

	'keyup .new_message': function(event) {
		if( event.which == 13 ) {
			event.preventDefault();
			var new_message = $('.new_message').val();
			var dname = $('.name').text();
			var check = new_message != '' && dname != '';
			var url = Session.get('current_chat_bot');
			if( check ) {
				Messages.insert({
					name: dname,
					message: new_message,
					url: url
				});
				$('.new_message').val('');
			}	
		}
	},

	'click .insert': function() {
		var new_message = $('.new_message').val();
		var dname = $('.name').text();
		var check = new_message != '' && dname != '';
		var url = Session.get('current_chat_bot');
		if( check ) {
			Messages.insert({
				name: dname,
				message: new_message,
				url: url
			});
			$('.new_message').val('');
		}
	}
}