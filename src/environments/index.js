'use strict';

var constants = require('./environments.constant');

angular
  .module('solutioncenter.communicator')
  .constant('DEFAULT_ENVIRONMENT', constants.DEFAULT_ENVIRONMENT)
  .constant('ENVIRONMENTS', constants.ENVIRONMENTS)
  .provider('ScEnvironments', [
    'ENVIRONMENTS', 'DEFAULT_ENVIRONMENT',
    require('./environments.provider')
  ]);
