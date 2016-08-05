Vendeur = new Mongo.Collection("vendeur");

Vendeur.allow({
    insert: function(userId, doc){
		if(doc.author !== userId) {
			throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer un nouveau post !");
		}
		return true;
	}
});