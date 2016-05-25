angular.module('solution.center.communicator')

  .provider('environments.service', ['$windowProvider', 'ENVIRONMENTS',
    function ($windowProvider, ENVIRONMENTS) {
      'use strict';

      var $window = $windowProvider.$get();
      var isTestEnvironment = typeof $window['jasmine'] === 'object';
      var environment;

      /**
       * Get environment object by name
       * Possible values: 'PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT'
       *
       * @param {string} name - Environment name
       * @returns {Object} Specified environment or fallback environment (LOCAL)
       */
      var getNamedEnvironment = function (name) {
        return ENVIRONMENTS[name] || ENVIRONMENTS.LOCAL;
      };

      /**
       * Get environment object based on custom config
       *
       * The config object passed to this method must contain an `ENVIRONMENT` property to avoid falling back
       * to LOCAL. The idea here is that the `ENVIRONMENT` object will have pre-populated all of the information
       * necessary for the environment in question.
       *
       * In the case of Solution Center, the `ENVIRONMENT` object is populated via YAML files during deployment.
       * The `NAME` property of this object will contain either the YAML-supplied environment name or the placeholder
       * string "${NAME}"
       *
       * This method first checks that "$" is not found in the `NAME` property. If "$" is not found AND `env` is
       * defined, the environment will be returned. Otherwise, the LOCAL environment will be returned.
       *
       * @param {Object} config - Custom environment config
       * @returns {Object} Custom environment or fallback environment (LOCAL)
       */
      var getCustomEnvironment = function (config) {
        var env = config && config.ENVIRONMENT;
        var name = (env && env.NAME) || '';

        return (name.indexOf('$') === -1 && env) || ENVIRONMENTS.LOCAL;
      };

      return {

        /**
         * Get current environment
         * @param (string|Object} env - Environment name or custom environment object
         * @returns {Object}
         */
        getCurrentEnvironment: function (env) {
          environment = (typeof env === 'string' && getNamedEnvironment(env)) || getCustomEnvironment(env);

          return (isTestEnvironment && ENVIRONMENTS.TESTING) || environment;
        }

        /**
         * Configure environment for appropriate handling of Solution Center apps
         * @param (string|Object) name Possible values: 'PRODUCTION', 'INTEGRATION', 'STAGE', 'LOCAL'
         * @param port Only used for development environments (LOCAL) if using a port different than the default one (3333)
         * @param tokenService Only used for development environments (LOCAL) to allow mocking it in case it is necessary
         */
        // configEnvironment: function (name, port, tokenService) {
        //   environment = {};
        //   environment.name = isValidEnvironment(name) ? name : defaultEnvironmentName;
        //
        //   if (environment.name === defaultEnvironmentName) {
        //     environment.port = port || ENVIRONMENTS[defaultEnvironmentName].port;
        //     environment.tokenService = tokenService || ENVIRONMENTS[defaultEnvironmentName].tokenservice;
        //   }
        // }

      };

    }
  ]);
