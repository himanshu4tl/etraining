// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app=angular.module('etraining', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
        }
      }
    })

  .state('app.help', {
      url: '/help',
      views: {
        'menuContent': {
          templateUrl: 'templates/help.html',
        }
      }
    })

  .state('app.modules', {
    url: '/modules',
    views: {
      'menuContent': {
        templateUrl: 'templates/modules.html',
        controller: 'ModulesCtrl'
      }
    }
  })

  
  .state('app.modul', {
    url: '/module/:moduleId',
    views: {
      'menuContent': {
        templateUrl: 'templates/module.html',
        controller: 'ModuleCtrl'
      }
    }
  })
  .state('app.training', {
    url: '/training/:moduleId',
    views: {
      'menuContent': {
        templateUrl: 'templates/training.html',
        controller: 'TrainingCtrl'
      }
    }
  })
    
 .state('app.store', {
      url: '/store',
      views: {
        'menuContent': {
          templateUrl: 'templates/store.html',
          controller: 'StoreCtrl'
        }
      }
    })
    

 .state('app.detail', {
    url: '/detail/:apm_id',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
      }
    }
  });
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/modules');
});

//app.config.url='http://4technolabs.com/etraining/web/api/';
app.config.url='http://localhost/pro/pro/etraining/web/api/';
