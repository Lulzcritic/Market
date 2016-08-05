Template.base.events({
    "click .logout": function(event, template) {
        Meteor.logout();
    }
});