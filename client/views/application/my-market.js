Meteor.subscribe('myMarket');

Template.myownmarket.events({
    "submit .add_article" (e, template) {
		e.preventDefault();

		var title = $("input[name='titre']").val();
		var description = $("input[name='desc']").val();
		var price = $("input[name='prix']").val();
		var quantity = $("input[name='quantite']").val();
		var identity = Meteor.user();

		var article = {
			title: title,
			description: description,
			price: price,
			quantity: quantity,
			author: identity._id
		}
		
		Vendeur.insert(article);
	}
});