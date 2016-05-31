angular.module('solution.center.communicator')

  .provider('scc.environments', ['ENVIRONMENTS', 'DEFAULT_ENVIRONMENT',
    function (ENVIRONMENTS, DEFAULT_ENVIRONMENT) {
      'use strict';

      var defaultEnvironment = ENVIRONMENTS[DEFAULT_ENVIRONMENT];
      var environment;

      /**
       * Get environment object by name
       * Possible values: 'PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'
       *
       * @private
       * @param {string} name - Environment name
       * @returns {Object} Specified or default environment
       */
      var getNamedEnvironment = function (name) {
        return ENVIRONMENTS[name] || defaultEnvironment;
      };

      /**
       * Get environment object based on custom config
       *
       * The config object passed to this function must contain populated environment values to avoid using the
       * default environment. For example, the Zalando Solution Center populates this object via YAML files during
       * deployment.
       *
       * The `NAME` property of this object will contain either the YAML-supplied environment name (e.g. "PRODUCTION")
       * or the placeholder string "${NAME}". If we are in a non-LOCAL environment, "${NAME}" will have been replaced
       * with the appropriate value from the YAML file.
       *
       * The return statement ensures that `name` is neither empty nor contains a "$" sign. If both checks are true,
       * the custom environment is returned. Otherwise, the fallback environment is returned.
       *
       * @private
       * @param {Object} env - Custom environment config
       * @returns {Object} Custom or default environment
       */
      var getCustomEnvironment = function (env) {
        var name = (env && env.NAME) || '';
        return (name.length && name.indexOf('$') === -1 && env) || defaultEnvironment;
      };

      return {

        /**
         * Set current environment
         *
         * @public
         * @param {string|Object} env - Environment name or custom environment object
         * @returns {Object} Named or custom environment
         */
        setCurrentEnvironment: function (env) {
          environment = (angular.isString(env) && getNamedEnvironment(env)) || getCustomEnvironment(env);
          return environment;
        },

        /**
         * Get current environment
         * If environment was not previously configured, use default environment
         *
         * @public
         * @returns {Object} Current or default environment
         */
        getCurrentEnvironment: function () {
          return environment || defaultEnvironment;
        },

        /**
         * Get specific environment
         *
         * @public
         * @param {string} name - Environment name
         * @returns {Object} Specific or default environment
         */
        getSpecificEnvironment: function (name) {
          return (name && getNamedEnvironment(name)) || defaultEnvironment;
        },

        $get: function () {
          return {
            setCurrentEnvironment: this.setCurrentEnvironment,
            getCurrentEnvironment: this.getCurrentEnvironment,
            getSpecificEnvironment: this.getSpecificEnvironment
          };
        }

      };

    }
  ]);
