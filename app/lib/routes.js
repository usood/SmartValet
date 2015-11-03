//Configure Routers
Router.configure({
    layoutTemplate: 'LayoutSidebar',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

//Configure Reroute path after login
AccountsTemplates.configure({
    homeRoutePath: '/home',
    redirectTimeout: 4000
});

//Route for walkthrough
Router.route('/', {
    name: 'intro',
    controller: 'IntroController',
    action: 'action',
    where: 'client'
});

//Route for login
Router.route('/login', {
    name: 'login',
    controller: 'LoginController',
    action: 'action',
    where: 'client'
});

//Route for home page (Bring My Car)
Router.route('/home', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});

//Route for profile page
Router.route('/profile/:_id', {
    name: 'profile',
    controller: 'ProfileController',
    action: 'action',
    where: 'client'
});

//Route for list of cars
Router.route('/cars', {
    name: 'carsList',
    controller: 'CarsController',
    action: 'list',
    where: 'client'
});

//Route for list of venues
Router.route('/cars/add', {
    name: 'addCar',
    controller: 'CarsController',
    action: 'add',
    where: 'client'
});

//Route for editing your car information
Router.route('/cars/:_id', {
    name: 'editCar',
    controller: 'CarsController',
    action: 'edit',
    where: 'client'
});

//Route for history of transactions (venues)
Router.route('/history', {
    name: 'history',
    controller: 'HistoryController',
    action: 'action',
    where: 'client'
});

//Route for deals available
Router.route('/deals', {
    name: 'deals',
    controller: 'DealsController',
    action: 'action',
    where: 'client'
});

//Route to get help from support team
Router.route('/help', {
    name: 'help',
    controller: 'HelpController',
    action: 'action',
    where: 'client'
});

//Route which explains our application
Router.route('/about-us', {
    name: 'aboutUs',
    controller: 'AboutController',
    action: 'action',
    where: 'client'
});

