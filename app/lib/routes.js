Router.configure({
    layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

AccountsTemplates.configure({
  defaultLayout: 'MasterLayout',
});

Router.route('/', function () {
    this.render('Home');
    this.layout(Meteor.user() ? 'MainLayout' : 'MasterLayout');
});

Router.route('/profile/', {
    name: 'profileEmpty',
    template: 'profile',
    controller: 'ProfileController',
    onBeforeAction: function () {
        AntiModals.overlay('profileModal');
  }
});

Router.route('/profile/:username', {
    name: 'profile',
    controller: 'ProfileController',
    onBeforeAction: function () {
        AntiModals.overlay('profileModal');
    }
});

Router.route('/cars', {
  name: 'carsList',
  controller: 'CarsController',
  action: 'list',
  where: 'client'
});

Router.route('/cars/add', {
  name: 'addCar',
  controller: 'CarsController',
  action: 'add',
  where: 'client'
});

Router.route('/cars/:_id', {
  name: 'editCar',
  controller: 'CarsController',
  action: 'edit',
  where: 'client'
});

