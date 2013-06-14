Meteor.publish("chatbots", function() {
	return Chatbots.find();
});

Meteor.publish("messages", function() {
	return Messages.find();
})

