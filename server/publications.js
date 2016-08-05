Meteor.publish("allPostHeaders", function(){
    return Vendeur.find();
});

Meteor.publish('allKeys', function(){
    return Keys.find();
});

Meteor.publish("myMarket", function () {
    return Vendeur.find({author: this.userId});
});

Meteor.publish("theChat", function () {
    return Message.find();
});