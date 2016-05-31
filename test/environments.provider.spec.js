describe('sc.environments provider', function () {

  var environmentNames = ['PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'];
  var environmentInvalid = [{}, [], 2, '@', null, undefined, 1.2, environmentNames];
  var environmentsProvider;
  var defaultEnvironment;
  var mock;
  var env;

  beforeEach(function () {
    modules();
    injectors();
  });

  // SET ENVIRONMENT
  describe('set environment', function () {

    it('should set environment based on valid environment string', function () {
      environmentNames.forEach(function (name) {
        env = environmentsProvider.setCurrentEnvironment(name);
        expect(env.NAME).toBe(name);
      });
    });

    it('should set environment based on custom config', function () {
      mock = getMock('PRODUCTION');
      env = environmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(mock.NAME);
      expect(env.CUSTOM_VALUE).toBe(true);
    });

    it('should set default environment if custom config `NAME` contains a "$" sign', function () {
      mock = getMock('${NAME}');
      env = environmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should set default environment if custom config `NAME` is an empty string', function () {
      mock = getMock('');
      env = environmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should set default environment if invalid environment value is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        env = environmentsProvider.setCurrentEnvironment(invalid);
        expect(env.NAME).toBe(defaultEnvironment);
      });
    });

  });

  // GET CURRENT ENVIRONMENT
  describe('get current environment', function () {

    it('should return default environment if environment has not been set', function () {
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should return specific environment if it was previously set', function () {
      environmentsProvider.setCurrentEnvironment('STAGE');
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('STAGE');
    });

  });

  // GET SPECIFIC ENVIRONMENT
  describe('get specific environment', function () {

    it('should return specific environment if valid environment string is passed', function () {
      env = environmentsProvider.getSpecificEnvironment('INTEGRATION');
      expect(env.NAME).toBe('INTEGRATION');
    });

    it('should return default environment if invalid environment is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        env = environmentsProvider.getSpecificEnvironment(invalid);
        expect(env.NAME).toBe(defaultEnvironment);
      });
    });

  });

  ////////////////////

  function modules() {
    module('solution.center.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      environmentsProvider = $injector.get('scc.environments');
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
