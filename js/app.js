'use strict';

// Inicia la aplicación llamada 'app'
var app_ = angular.module('app', [
    'ngRoute',           // Directiva para RouteProvider
    'appControllers',    // controllers
]);

// Para cargar controllers desde archivos externos
var appControllers = angular.module('appControllers', []);

// configuración de rutas AngularJS
app_.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
    .when(
    '/',
    {
        templateUrl: 'pages/introductions.html',
        controller: 'introductions_ctrl'
    })

    .when(
    '/features',
    {
        templateUrl: 'pages/features.html',
        controller: 'features_ctrl'
    })

    .when(
        '/downloads',
        {
            templateUrl: 'pages/downloads.html',
            controller: 'downloads_ctrl'
        })
    .when(
        '/resources',
        {
            templateUrl: 'pages/resources.html',
            controller: 'resources_ctrl'
        })
    .when(
        '/about',
        {
            templateUrl: 'pages/about.html',
            controller: 'about_ctrl'
        })
    .when('/news',
        {   
            templateUrl: 'pages/news.html', 
            controller: 'news_ctrl'
        })
        // ruta
    // ruta por defecto
    .otherwise({ redirectTo: '/' });
}]);