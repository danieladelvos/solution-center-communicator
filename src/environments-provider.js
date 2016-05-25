angular.module('solution.center.communicator')

  .provider('environment', ['$window', function ($window) {
    'use strict';

    var environments = {
      PRODUCTION: {
        name: 'PRODUCTION',
        url: 'solutions.zalando.com',
        logentriesToken: 'd55ac62d-77c8-4388-9159-a58e330ffdc8',
        cookieDomain: 'solutions.zalando.com'
      },
      INTEGRATION: {
        name: 'INTEGRATION',
        url: 'sc-integration.norris.zalan.do',
        cookieDomain: '.zalan.do'
      },
      STAGE: {
        name: 'STAGE',
        url: 'sc-stage.norris.zalan.do',
        logentriesToken: '0468fc87-03bc-4954-8ce5-907aa019277e',
        cookieDomain: '.zalan.do'
      },
      DEVELOPMENT: {
        name: 'DEVELOPMENT',
        url: 'sc-development.norris.zalan.do',
        cookieDomain: '.zalan.do'
      },
      LOCAL: {
        name: 'LOCAL',
        url: 'localhost',
        cookieDomain: 'localhost'
      },
      TESTING: {
        name: 'TESTING'
      }
    };

    // TODO this module must be refactored or removed when we defined
    // a strategy to handle multiple environments and rest APIs discovery system
    var currentEnvironment = (function () {
      if (typeof $window['jasmine'] == 'object') {
        return environments.TESTING;
      }

      var hostname = $window.location.hostname;
      var environment = undefined;

      Object.keys(environments)
        .forEach(function (key) {
          if (hostname.indexOf(environments[key].url) !== -1) {
            environment = environments[key];
          }
        });

      return environment || environments.DEVELOPMENT; // TODO Fallback to DEV. Should never come here though
    })();

    this.getCurrent = function () {
      return currentEnvironment;
    };

    this.$get = function () {
      return {
        getCurrent: function () {
          return currentEnvironment;
        }
      };
    };

    return this;
  }]);
