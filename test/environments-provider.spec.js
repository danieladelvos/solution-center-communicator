describe('environments provider', function () {

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

    it('should set environment based on passed environment string', function () {
      environmentNames.forEach(function (name) {
        env = environmentsProvider.setCurrentEnvironment(name);
        expect(env.NAME).toBe(name);
      });
    });

    it('should set environment based on custom config', function () {
      mock = getMock('PRODUCTION');
      env = environmentsProvider.setCurrentEnvironment(mock);
      expect(env.NAME).toBe(mock.ENVIRONMENT.NAME);
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

  // GET ENVIRONMENT
  describe('get environment', function () {

    it('should return default environment if environment has not been set', function () {
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe(defaultEnvironment);
    });

    it('should return specific environment if it was previously set', function () {
      environmentsProvider.setCurrentEnvironment('STAGE');
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('STAGE');
    });

    it('should return specific environment if environment string is passed', function () {
      env = environmentsProvider.getCurrentEnvironment('INTEGRATION');
      expect(env.NAME).toBe('INTEGRATION');
    });

    it('should return default environment if invalid environment is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        env = environmentsProvider.getCurrentEnvironment(invalid);
        expect(env.NAME).toBe(defaultEnvironment);
      });
    });

  });

  // FORMAT ENVIRONMENT
  describe('format environment', function () {

    it('should format environment object by wrapping it in an `ENVIRONMENT` property', function () {
      mock = getMock('STAGE').ENVIRONMENT;
      env = environmentsProvider.formatEnvironment(mock);

      expect(mock.ENVIRONMENT).toBeUndefined();
      expect(env.ENVIRONMENT).toBeDefined();
      expect(env.ENVIRONMENT.CUSTOM_VALUE).toBe(true);
    });

  });

  ////////////////////

  function modules() {
    module('solution.center.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      environmentsProvider = $injector.get('environments');
      defaultEnvironment = $injector.get('DEFAULT_ENVIRONMENT');
    });
  }

  function getMock(env) {
    return {
      ENVIRONMENT: {
        NAME: env,
        CUSTOM_VALUE: true
      }
    };
  }

});
