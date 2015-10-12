Template.MasterLayout.helpers({
    user: function(){
        return Meteor.user();
    }
});

Template.MainLayout.events({
    'click [data-action=sign-out]': function (event, template) {
        Meteor.logout(function () {
            Router.go('/');
        });
    }
});