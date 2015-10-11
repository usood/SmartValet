Router.configure({
  layoutTemplate: 'MasterLayout',
  yieldTemplates: {
    myNav: {to: 'nav'},
    myFooter: {to: 'footer'},
  },
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

AccountsTemplates.configure({
  defaultLayout: 'MasterLayout',
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  template: 'login',
  layoutTemplate: 'myLayout',
  redirect: function(){
    var user = Meteor.user();
    if (user)
      Router.go('/user/' + user._id);
  }
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
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

