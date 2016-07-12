/* eslint-disable angular/di */

describe('scEnvironment', function () {

  var environmentNames = ['PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'],
      environmentInvalid = [{}, [], 2, '@', null, undefined, 1.2, environmentNames],
      ScEnvironmentsProvider,
      defaultEnvironment,
      mock,
      env;

  beforeEach(function () {
    modules();
    injectors();
  });

  // SET ENVIRONMENT
  describe('set environment', function () {

    it('should set environment based on valid environment string', function () {
      environmentNames.forEach(function (name) {
        env = ScEnvironmentsProvider.setCurrentEnvironment(name);
        expect(env.NAME).toBe(name);
      });
    });

    it('should set environment based on custom config', function () {
      mock = getMock('PRODUCTION');
      env = ScEnvironmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(mock.NAME);
      expect(env.CUSTOM_VALUE).toBe(true);
    });

    it('should set local environment if custom config `NAME` contains a "$" sign', function () {
      mock = getMock('${NAME}');
      env = ScEnvironmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe('LOCAL');
    });

    it('should set default environment if custom config `NAME` is an empty string', function () {
      mock = getMock('');
      env = ScEnvironmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should set default environment if invalid environment value is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        env = ScEnvironmentsProvider.setCurrentEnvironment(invalid);
        expect(env.NAME).toBe(defaultEnvironment);
      });
    });

  });

  // GET CURRENT ENVIRONMENT
  describe('get current environment', function () {

    it('should return default environment if environment has not been set', function () {
      env = ScEnvironmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should return specific environment if it was previously set', function () {
      ScEnvironmentsProvider.setCurrentEnvironment('STAGE');
      env = ScEnvironmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('STAGE');
    });

  });

  // GET SPECIFIC ENVIRONMENT
  describe('get specific environment', function () {

    it('should return specific environment if valid environment string is passed', function () {
      env = ScEnvironmentsProvider.getSpecificEnvironment('INTEGRATION');
      expect(env.NAME).toBe('INTEGRATION');
    });

    it('should return default environment if invalid environment is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        env = ScEnvironmentsProvider.getSpecificEnvironment(invalid);
        expect(env.NAME).toBe(defaultEnvironment);
      });
    });

  });

  ////////////////////

  function modules() {
    module('solutioncenter.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      ScEnvironmentsProvider = $injector.get('ScEnvironments');
      defaultEnvironment = $injector.get('DEFAULT_ENVIRONMENT');
    });
  }

  function getMock(env) {
    return {
      NAME: env,
      CUSTOM_VALUE: true
    };
  }

});
