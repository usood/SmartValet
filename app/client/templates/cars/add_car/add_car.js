/*****************************************************************************/
/* AddCar: Event Handlers */
/*****************************************************************************/
Template.AddCar.events({});

AutoForm.hooks({
    'cars-new-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            IonKeyboard.close();
        }
    }
});

/*****************************************************************************/
/* AddCar: Helpers */
/*****************************************************************************/
Template.AddCar.helpers({});

/*****************************************************************************/
/* AddCar: Lifecycle Hooks */
/*****************************************************************************/
Template.AddCar.onCreated(function () {
});

Template.AddCar.onRendered(function () {
});

Template.AddCar.onDestroyed(function () {
});
