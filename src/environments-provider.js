angular.module('solution.center.communicator')

  .provider('environments', ['ENVIRONMENTS', function (ENVIRONMENTS) {
    'use strict';

    var getEnvironment = function (config) {
      if (typeof window['jasmine'] == 'object') {
        return config.TESTING;
      }

      var env = config.ENVIRONMENT;

      // if "$" is NOT contained in the `NAME` value, use that environment
      // if "$" is contained in the `NAME` value, use LOCAL environment
      return (env.NAME.indexOf('$') === -1 && env) || config.LOCAL;

    };

    this.getCurrent = function (name) {
      //return (custom && getEnvironment(custom)) || getEnvironment(CONFIG);
    };

    this.$get = function () {
      return {
        getCurrent: this.getCurrent
      };
    };

    return this;
  }]);
