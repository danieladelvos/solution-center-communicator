angular.module('solution.center.communicator', []);

angular.module('solution.center.communicator')
    .constant('DEFAULT_ENVIRONMENT', 'LOCAL')
    .constant('ENVIRONMENTS', {
      PRODUCTION: {
        NAME: 'PRODUCTION',
        URL: 'https://solutions.zalando.com',
        DOMAIN: 'solutions.zalando.com',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://user-management.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://token-management.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-management.norris.zalan.do'
        }
      },
      STAGE: {
        NAME: 'STAGE',
        URL: 'https://sc-stage.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-stage.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-stage.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-stage.norris.zalan.do'
        }
      },
      INTEGRATION: {
        NAME: 'INTEGRATION',
        URL: 'https://sc-integration.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-integration.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-integration.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-integration.norris.zalan.do'
        }
      },
      DEVELOPMENT: {
        NAME: 'DEVELOPMENT',
        URL: 'https://sc-development.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-development.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-development.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-development.norris.zalan.do'
        }
      },
      LOCAL: {
        NAME: 'LOCAL',
        URL: 'localhost',
        DOMAIN: 'localhost',
        PORT: 3333,
        USER_SERVICE: {
          BASE_URL: 'https://um-development.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-development.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-development.norris.zalan.do'
        }
      },
      TESTING: {
        NAME: 'TESTING',
        URL: '',
        DOMAIN: '',
        PORT: '',
        MERCHANT_SERVICE: {
          BASE_URL: ''
        },
        USER_SERVICE: {
          BASE_URL: ''
        },
        TOKEN_SERVICE: {
          BASE_URL: ''
        }
      }
    });

angular.module('solution.center.communicator')

  .provider('environments', ['ENVIRONMENTS', 'DEFAULT_ENVIRONMENT',
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
       * The config object passed to this method must contain an `ENVIRONMENT` object to avoid falling back
       * to `LOCAL`. The idea here is that the `ENVIRONMENT` object will have been populated with the necessary
       * values prior to making a call to the public `setCurrentEnvironment()` method below.
       *
       * For example, the Zalando Solution Center populates the `ENVIRONMENT` object via YAML files during deployment.
       * The `NAME` property of this object will contain either the YAML-supplied environment name (e.g. "PRODUCTION")
       * or the placeholder string "${NAME}". If we are in a non-LOCAL environment, "${NAME}" will have been replaced
       * with the appropriate value from the YAML file.
       *
       * This method first checks that the `ENVIRONMENT` property exists in the custom config object. If `ENVIRONMENT`
       * is found, `name` will be set to the value in the `NAME` property. Otherwise, `name` will be an empty string.
       *
       * The return statement ensures that `name` is neither empty nor contains a "$" sign. If both checks are true,
       * the custom environment is returned. Otherwise, the fallback environment is returned.
       *
       * @private
       * @param {Object} config - Custom environment config
       * @returns {Object} Custom or default environment
       */
      var getCustomEnvironment = function (config) {
        var env = config && config.ENVIRONMENT;
        var name = (env && env.NAME) || '';

        return (name.length && name.indexOf('$') === -1 && env) || defaultEnvironment;
      };

      /**
       * Wrap environment object with `ENVIRONMENT` property
       *
       * @private
       * @param {Object} env - Environment object
       * @returns {Object} Wrapped environment
       */
      var wrapEnvironment = function (env) {
        return {
          ENVIRONMENT: env
        };
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
         * Get current or named environment
         * If environment was not previously configured, use default environment
         *
         * @public
         * @param {string} name - Environment name
         * @returns {Object} Named, current or default environment
         */
        getCurrentEnvironment: function (name) {
          return (name && getNamedEnvironment(name)) || environment || defaultEnvironment;
        },

        /**
         * Wrap environment object with `ENVIRONMENT` property
         *
         * @public
         * @param {Object} env - Environment object
         * @returns {Object} Wrapped or default environment
         */
        formatEnvironment: function (env) {
          return (angular.isObject(env) && wrapEnvironment(env)) || defaultEnvironment;
        },

        $get: function () {
          return {
            setCurrentEnvironment: this.setCurrentEnvironment,
            getCurrentEnvironment: this.getCurrentEnvironment,
            formatEnvironment: this.formatEnvironment
          };
        }

      };

    }
  ]);
