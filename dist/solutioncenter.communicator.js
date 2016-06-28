/*!
 * Name: solution-center-communicator
 * Version: 1.0.0
 * Homepage: https://github.com/zalando-incubator/solution-center-communicator
 * License: MIT
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.DEFAULT_ENVIRONMENT = 'INTEGRATION';
module.exports.ENVIRONMENTS = {
  PRODUCTION: {
    NAME: 'PRODUCTION',
    URL: 'https://www.solutions.zalando.com',
    DOMAIN: 'solutions.zalando.com',
    PORT: '',
    USER_SERVICE: 'https://user-management.norris.zalan.do',
    TOKEN_SERVICE: 'https://token-management.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-management.norris.zalan.do'
  },
  STAGE: {
    NAME: 'STAGE',
    URL: 'https://sc-stage.norris.zalan.do',
    DOMAIN: '.zalan.do',
    PORT: '',
    USER_SERVICE: 'https://um-stage.norris.zalan.do',
    TOKEN_SERVICE: 'https://tm-stage.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-stage.norris.zalan.do'
  },
  INTEGRATION: {
    NAME: 'INTEGRATION',
    URL: 'https://sc-integration.norris.zalan.do',
    DOMAIN: '.zalan.do',
    PORT: '',
    USER_SERVICE: 'https://um-integration.norris.zalan.do',
    TOKEN_SERVICE: 'https://tm-integration.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-integration.norris.zalan.do'
  },
  DEVELOPMENT: {
    NAME: 'DEVELOPMENT',
    URL: 'https://sc-development.norris.zalan.do',
    DOMAIN: '.zalan.do',
    PORT: '',
    USER_SERVICE: 'https://um-development.norris.zalan.do',
    TOKEN_SERVICE: 'https://tm-development.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-development.norris.zalan.do'
  },
  LOCAL: {
    NAME: 'LOCAL',
    URL: 'http://localhost',
    DOMAIN: 'localhost',
    PORT: 3333,
    USER_SERVICE: 'https://um-development.norris.zalan.do',
    TOKEN_SERVICE: 'https://tm-development.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-development.norris.zalan.do'
  },
  TESTING: {
    NAME: 'TESTING',
    URL: '',
    DOMAIN: '',
    PORT: '',
    MERCHANT_SERVICE: '',
    USER_SERVICE: '',
    TOKEN_SERVICE: ''
  }
};

},{}],2:[function(require,module,exports){
module.exports = function (ENVIRONMENTS, DEFAULT_ENVIRONMENT) {
  'use strict';

  var defaultEnvironment = ENVIRONMENTS[DEFAULT_ENVIRONMENT],
      localEnvironment = ENVIRONMENTS['LOCAL'],
      environment;

  return {
    getCurrentEnvironment: getCurrentEnvironment,
    getSpecificEnvironment: getSpecificEnvironment,
    setCurrentEnvironment: setCurrentEnvironment,
    $get: function () {
      return {
        getCurrentEnvironment: this.getCurrentEnvironment,
        getSpecificEnvironment: this.getSpecificEnvironment,
        setCurrentEnvironment: this.setCurrentEnvironment
      };
    }
  };

  /////////////////////////

  /**
   * Get environment object by name
   * Possible values: 'PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'
   *
   * @private
   * @param {string} name - Environment name
   * @returns {Object} Specified or default environment
   */
  function getNamedEnvironment(name) {
    return ENVIRONMENTS[name] || defaultEnvironment;
  }

  /**
   * Get environment object based on custom config
   *
   * The config object passed to this function must contain populated environment values to avoid using the
   * default environment. For example, the Zalando Solution Center populates this object via YAML files during
   * deployment.
   *
   * The `NAME` property of this object will contain either the YAML-supplied environment name (e.g. "PRODUCTION")
   * or the placeholder string "${NAME}". If we are in a non-LOCAL environment, "${NAME}" will have been replaced
   * with the appropriate value from the YAML file. The value in `NAME` is assigned to `name` below.
   *
   * If `name` does not contain a "$" sign, the custom environment is returned. If `name` does contain a "$" sign,
   * the LOCAL environment is returned. Otherwise, the default environment is returned.
   *
   * @private
   * @param {Object} env - Custom environment config
   * @returns {Object} Custom, local or default environment
   */
  function getCustomEnvironment(env) {
    var name = (env && env.NAME) || '',
        dollar = name.indexOf('$') === -1,
        custom = name.length && dollar && env,
        local = name.length && !dollar && localEnvironment;

    return custom || local || defaultEnvironment;
  }

  /**
   * Set current environment
   *
   * @public
   * @param {string|Object} env - Environment name or custom environment object
   * @returns {Object} Named or custom environment
   */
  function setCurrentEnvironment(env) {
    environment = (typeof env === 'string' && getNamedEnvironment(env)) || getCustomEnvironment(env);
    return environment;
  }

  /**
   * Get current environment
   * If environment was not previously configured, use default environment
   *
   * @public
   * @returns {Object} Current or default environment
   */
  function getCurrentEnvironment() {
    return environment || defaultEnvironment;
  }

  /**
   * Get specific environment
   *
   * @public
   * @param {string} name - Environment name
   * @returns {Object} Specific or default environment
   */
  function getSpecificEnvironment(name) {
    return (name && getNamedEnvironment(name)) || defaultEnvironment;
  }

};

},{}],3:[function(require,module,exports){
'use strict';

var constants = require('./environments.constant');

angular
  .module('solutioncenter.communicator')
  .constant('DEFAULT_ENVIRONMENT', constants.DEFAULT_ENVIRONMENT)
  .constant('ENVIRONMENTS', constants.ENVIRONMENTS)
  .provider('scEnvironments', [
    'ENVIRONMENTS', 'DEFAULT_ENVIRONMENT',
    require('./environments.provider')
  ]);

},{"./environments.constant":1,"./environments.provider":2}],4:[function(require,module,exports){
'use strict';

angular.module('solutioncenter.communicator', []);
require('./environments');

},{"./environments":3}]},{},[4]);
