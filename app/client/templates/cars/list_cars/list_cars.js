/*****************************************************************************/
/* ListCars: Event Handlers */
/*****************************************************************************/
Template.ListCars.events({});

/*****************************************************************************/
/* ListCars: Helpers */
/*****************************************************************************/
Template.ListCars.helpers({
    cars: function () {
        return Cars.find();
    }
});

/*****************************************************************************/
/* ListCars: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCars.onCreated(function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('cars');
    }.bind(this));
});

Template.ListCars.onRendered(function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
});

Template.ListCars.onDestroyed(function () {
});
