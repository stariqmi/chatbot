var commentData = [
	{
		name : "Salman Tariq",
		comment : "This is a cool app"
	},
	{
		name : "Salman Mirza",
		comment : "Meteor is awesome!"
	}
];

Template.comments_list.helpers({
	comments: commentData
});