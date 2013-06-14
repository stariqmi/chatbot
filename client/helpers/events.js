Template.create_chatbot.events = {

	// Event handler for the create button
	'click .create_button': function() {
		$('.error p').css('color', 'red');

		// Extracting the value of the input fields 
		var name = $('.name_input').val();
		
		// Validation
		if( name == '' ) {
			$('.error p').text('Please enter a name for your chatbot');
			$('.error').fadeIn();
		}
		else {
			var bot_name = name.replace(' ', '_');
				
			var existing_bots = Chatbots.find({name: name}).fetch();
			console.log(existing_bots.length);

			if(existing_bots.length != 0) {
				var message  = 'A chatbot by this name already exists';
				$('.error p').text(message);
				$('.error').fadeIn();
			}
			else {
				Chatbots.insert({
					name: name,
					url: bot_name,
					total: 0
				});
				$('.error p').css('color', 'green');
				var message  = 'The url for your chatbot is chatbot.meteor.com/' + bot_name;
				$('.error p').text(message);
				$('.error').fadeIn();	
			}
		}
	}
}

Template.chat_page.events =  {
	'click .set': function(event) {
		$('.new_name').slideToggle(function() {
			$('.set_name').show();
		});
	},

	'keyup .new_name_input': function(event) {
		if( event.which == 13 ) {
			var new_name = $('input.new_name_input').val();
			if( new_name != '') {
				$('.name').text(new_name);
				$('.set').text('edit');
				$('.new_name').slideUp();
			}
		}
	},

	'click .set_name': function(event) {
		var new_name = $('input.new_name_input').val();
		if( new_name != '') {
			$('.name').text(new_name);
			$('.set').text('edit');
			$('.new_name').slideUp();
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
			$(window).scrollTop($(window).height());
			$('.new_message').val('');
		}
	}
}

Template.chat_page.rendered = function() {
	$(window).scrollTop($(window).height());

	$(window).on('scroll', function() {
		var scroll_height = $(window).scrollTop();
		if(scroll_height > 270) {
			$('.chat_panel').css('top', function() {
				return (scroll_height - 270)  + 'px';
			})
			//console.log($('.chat_panel').css('top'))
		}
		else {
			$('.chat_panel').css('top', '0px');
		}
	})
}
