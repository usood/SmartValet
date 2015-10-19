/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.EditCar.events({});

AutoForm.hooks({
    'cars-edit-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            IonKeyboard.close();
            Router.go('carsList');
        }
    }
});
/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.EditCar.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Really delete car: "' + doc.brand + " " + doc.model + '"?')) {
                this.remove();
                Router.go('carsList');
            }
        };
    }
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCar.onCreated(function () {
});

Template.EditCar.onRendered(function () {
});

Template.EditCar.onDestroyed(function () {
});
