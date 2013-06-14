Meteor.Router.add( {
	'/': 'steps',
	'/create': 'create_chatbot',
	'/:url': {
		to: 'chat_page',
		and: function(url) { Session.set('current_chat_bot', url); }
	}
});