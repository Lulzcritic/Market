Router.configure({
    layoutTemplate: 'base'
});

Router.route('/', {
    name: 'acceuil'
});

Router.route('/compte', {
    name: 'compte'
});

Router.route('/market', {
    name: 'market',
    data: function(){
        var vendeur = Vendeur.find();
        return {
            market: vendeur
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/myownmarket', {
    name: 'myownmarket',
    data: function() {
        var myarticle = Vendeur.find();
        return {
            my_market: myarticle
        };
    },
});

Router.route('/chat', {
    name: 'chat',
    data: function() {
        var themsg = Message.find();
        return {
            chatroom: themsg
        };
    },
});

