/// <reference path="../app.ts" />

'use strict';

module swaggerBuilderApp {
  export interface IAboutScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class AboutCtrl {
    // @ngInject
    constructor (private $scope: IAboutScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('swaggerBuilderApp')
  .controller('AboutCtrl', swaggerBuilderApp.AboutCtrl);
