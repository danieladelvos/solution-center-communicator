angular.module('solution.center.communicator')

  .provider('environments', ['ENVIRONMENTS',
    function (ENVIRONMENTS) {
      'use strict';

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
       * The config object passed to this method must contain an `ENVIRONMENT` object to avoid falling back
       * to `LOCAL`. The idea here is that the `ENVIRONMENT` object will have been populated with the necessary
       * values prior to making a call to the `getCurrentEnvironment()` method.
       *
       * For example, Solution Center populates the `ENVIRONMENT` object via YAML files during deployment. The
       * `NAME` property of this object will contain either the YAML-supplied environment name (e.g. "PRODUCTION")
       * or the placeholder string "${NAME}". If we are in a non-LOCAL environment, "${NAME}" will have been replaced
       * with the appropriate value from the YAML file.
       *
       * This method first checks that the `ENVIRONMENT` property exists in the custom config object. If `ENVIRONMENT`
       * is found, `name` will be set to the value in the `NAME` property. Otherwise, `name` will be an empty string.
       *
       * The return statement ensures that `name` is neither empty nor contains a "$" sign. If both checks are true,
       * the custom environment is returned. Otherwise, the fallback environment is returned.
       *
       * @param {Object} config - Custom environment config
       * @returns {Object} Custom environment or fallback environment (LOCAL)
       */
      var getCustomEnvironment = function (config) {
        var env = config && config.ENVIRONMENT;
        var name = (env && env.NAME) || '';

        return (name.length && name.indexOf('$') === -1 && env) || ENVIRONMENTS.LOCAL;
      };

      return {

        /**
         * Set current environment
         * @param (string|Object} env - Environment name or custom environment object
         * @returns {Object} Named, custom, or fallback environment
         */
        setCurrentEnvironment: function (env) {
          environment = (angular.isString(env) && getNamedEnvironment(env)) || getCustomEnvironment(env);
          return environment;
        },

        /**
         * Get current environment
         * If not previously configured, fallback to LOCAL
         *
         * @returns {Object} Current or LOCAL environment
         */
        getCurrentEnvironment: function () {
          return environment || ENVIRONMENTS.LOCAL;
        },

        $get: function () {
          return {
            setCurrentEnvironment: this.setCurrentEnvironment,
            getCurrentEnvironment: this.getCurrentEnvironment
          };
        }

      };

    }
  ]);
