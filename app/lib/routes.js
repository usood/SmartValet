Router.configure({
    layoutTemplate: 'LayoutSidebar',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

AccountsTemplates.configure({
    homeRoutePath: '/home',
    redirectTimeout: 4000,
});

Router.route('/', {
    name: 'intro',
    controller: 'IntroController',
    action: 'action',
    where: 'client'
});

Router.route('/login', {
    name: 'login',
    controller: 'LoginController',
    action: 'action',
    where: 'client'
});

Router.route('/home', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});

Router.route('/profile/:_id', {
    name: 'profile',
    controller: 'ProfileController',
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

Router.route('/history', {
    name: 'history',
    controller: 'HistoryController',
    action: 'action',
    where: 'client'
});

Router.route('/deals', {
    name: 'deals',
    controller: 'DealsController',
    action: 'action',
    where: 'client'
});

Router.route('/help', {
    name: 'help',
    controller: 'HelpController',
    action: 'action',
    where: 'client'
});

Router.route('/about', {
    name: 'aboutUs',
    controller: 'AboutController',
    action: 'action',
    where: 'client'
});

