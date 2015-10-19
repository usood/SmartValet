Template.UserProfile.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('user', Meteor.userId());
    }.bind(this));
};

Template.UserProfile.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};
/*****************************************************************************/
/* UserProfile: Event Handlers */
/*****************************************************************************/
Template.UserProfile.events({});

/*****************************************************************************/
/* UserProfile: Helpers */
/*****************************************************************************/
Template.UserProfile.helpers({
    user: function () {
        if (Meteor.userId()) {
            return Meteor.user();
        }
    }
});

/*****************************************************************************/
/* UserProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.UserProfile.onCreated(function () {
});

Template.UserProfile.onRendered(function () {
});

Template.UserProfile.onDestroyed(function () {
});
