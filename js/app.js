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
        '/history',
        {
            templateUrl: 'pages/history.html',
            controller: 'history_ctrl'
        })
    .when(
        '/credits',
        {
            templateUrl: 'pages/credits.html',
            controller: 'credits_ctrl'
        })
    .when(
        '/contributing',
        {
            templateUrl: 'pages/contributing.html',
            controller: 'contributing_ctrl'
        })
    .when(
        '/install',
        {
            templateUrl: 'pages/install.html',
            controller: 'install_ctrl'
        })
        // ruta
    // ruta por defecto
    .otherwise({ redirectTo: '/' });
}]);