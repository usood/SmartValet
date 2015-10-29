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
        Router.go('/history');
    },
    'click [data-action=deals]': function (event, template) {
        Router.go('/deals');
    },
    'click [data-action=help]': function (event, template) {
        Router.go('/help');
    },
    'click [data-action=about-us]': function (event, template) {
        Router.go('/about-us');
    },
    'click [data-action=home]': function (event, template) {
        Router.go('/home');
    },
    'click [data-action=sign-out]': function (event, template) {
        Meteor.logout(function () {
            Router.go('/login');
        });
    }

});