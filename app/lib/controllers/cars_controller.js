CarsController = RouteController.extend({

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
