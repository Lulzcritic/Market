Meteor.subscribe('allKeys');

Template.acceuil.events({
    'submit .verify'(e){
        e.preventDefault();
        
        const cible = e.target;
        const cle = cible.cle.value;
        var doc = Keys.findOne({key:cle});
        if(doc){
           // Router.go('/inscription');
           Blaze.render(Template.inscription, document.getElementById("secret"));
           $('.thedis').prop('disabled', true);
        }
    }
});