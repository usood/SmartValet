CarsController = RouteController.extend({

    // A place to put your subscriptions
    // this.subscribe('items');
    // // add the subscription to the waitlist
    // this.subscribe('item', this.params._id).wait();

    subscriptions: function () {
        this.subscribe('cars')
    },

    add: function () {
        this.render('AddCar', {});
    },

    list: function () {
        this.render('ListCars', {});
    },

    edit: function () {
        this.render('EditCar', {});
    },

    data: function () {
        return Cars.findOne({_id: this.params._id});
    }
});
