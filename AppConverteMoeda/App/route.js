
app.config(function ($routeProvider) {
    $routeProvider

        .when(
        '/',
        {
            templateUrl: '/App/view/index.html',
            controller: 'converteCtrl as vm'
        })

        $routeProvider.otherwise({
            redirectTo: '/'
        });
});

app.config(function ($locationProvider) {
    $locationProvider.hashPrefix('');
});
