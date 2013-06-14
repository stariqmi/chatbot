Template.chat_page.helpers({
	messages: function() {
		var url = Session.get("current_chat_bot");
		return Messages.find({ url: url }); 
	}
});
