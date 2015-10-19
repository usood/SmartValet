Template.LayoutPlain.helpers({
    user: function(){
        return Meteor.user();
    }
});

Template.LayoutSidebar.events({
    'click [data-action=profile]': function (event, template) {
        var userId = Meteor.userId();
        Router.go('/profile/' + userId);
    },
    'click [data-action=history]': function (event, template) {
        var userId = Meteor.userId();
        Router.go('/history/' + userId);
    },
    'click [data-action=deals]': function (event, template) {
        var userId = Meteor.userId();
        Router.go('/deals/' + userId);
    },
    'click [data-action=help]': function (event, template) {
        var userId = Meteor.userId();
        Router.go('/help/' + userId);
    },
    'click [data-action=about-us]': function (event, template) {
        var userId = Meteor.userId();
        Router.go('/about-us/' + userId);
    },
    'click [data-action=sign-out]': function (event, template) {
        Meteor.logout(function () {
            Router.go('/');
        });
    }

});