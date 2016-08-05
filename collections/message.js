Message = new Mongo.Collection("message");

Message.allow({
    insert: function(userId, doc){

		return true;
	}
});