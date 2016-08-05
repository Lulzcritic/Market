Meteor.subscribe('theChat');

Template.chat.events({
    "submit .send" (e, template) {
		e.preventDefault();

		var message = $("textarea[name='message']").val();
		var identity = Meteor.user();

		var data = {
			msg: message,
			author: identity.username
		}
		
		Message.insert(data);
	}
});