Meteor.publish("chatbots", function() {
	return Chatbots.find();
})