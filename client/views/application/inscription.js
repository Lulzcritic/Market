Template.inscription.events({
    "submit .inscr" (e, template) {
		e.preventDefault();

        const cibl = e.target;
		var username = cibl.username.value;
		var password = cibl.password.value;
		var profile = {
    	    // Vous pouvez mettre ici le contenu d'éventuels champs optionnels, comme le prénom, nom, etc.   
		};

		var user = {
			username: username,
			password: password,
			profile: profile
		};

		Accounts.createUser(user, function(err) { // Mais quelle est donc cette méthode mystère ?...
			if (err) {
				alert(err.reason)
			} else {
				document.location.reload(true); // Ceci est une redirection depuis un event/helper, elle est basée sur le nom de la route
			}
		});
	}
});