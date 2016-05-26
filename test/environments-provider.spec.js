describe('environments provider', function () {

  var environmentNames = ['PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'];
  var environmentInvalid = [{}, [], 2, '@', null, undefined, 1.2, environmentNames];
  var environmentsProvider;
  var mocks = {};

  beforeEach(function () {
    modules();
    injectors();
    getMocks();
  });

  // SET ENVIRONMENT
  describe('set environment', function () {

    it('should set environment based on passed environment string', function () {
      environmentNames.forEach(function (name) {
        var env = environmentsProvider.setCurrentEnvironment(name);
        expect(env.NAME).toBe(name);
      });
    });

    it('should set environment based on custom config', function () {
      var env = environmentsProvider.setCurrentEnvironment(mocks.environment.yaml);
      expect(env.NAME).toBe('PRODUCTION');
      expect(env.CUSTOM_VALUE).toBe(true);
    });

    it('should set environment to LOCAL if custom config `NAME` contains a "$" sign', function () {
      var env = environmentsProvider.setCurrentEnvironment(mocks.environment.dollar);
      expect(env.NAME).toBe('LOCAL');
    });

    it('should set environment to LOCAL if custom config `NAME` is an empty string', function () {
      var env = environmentsProvider.setCurrentEnvironment(mocks.environment.empty);
      expect(env.NAME).toBe('LOCAL');
    });

    it('should set environment to LOCAL if invalid environment value is passed', function () {
      environmentInvalid.forEach(function (invalid) {
        var env = environmentsProvider.setCurrentEnvironment(invalid);
        expect(env.NAME).toBe('LOCAL');
      });
    });

  });

  // GET ENVIRONMENT
  describe('get environment', function () {

    it('should return LOCAL if environment has not been set', function () {
      var env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('LOCAL');
    });

    it('should return specific environment if it was previously set', function () {
      var env;

      environmentsProvider.setCurrentEnvironment('STAGE');
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('STAGE');

      environmentsProvider.setCurrentEnvironment(mocks.environment.yaml);
      env = environmentsProvider.getCurrentEnvironment();
      expect(env.NAME).toBe('PRODUCTION');
    });

  });

  ////////////////////

  function modules() {
    module('solution.center.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      environmentsProvider = $injector.get('environments');
    });
  }

  function getMocks() {
    mocks.environment = {
      yaml: getYamlMock(),
      dollar: getDollarMock(),
      empty: getEmptyMock()
    };
  }

  function getYamlMock() {
    return {
      ENVIRONMENT: {
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
        },
        CUSTOM_VALUE: true
      }
    };
  }

  function getDollarMock() {
    return {
      ENVIRONMENT: {
        NAME: '${NAME}',
        URL: '${URL}',
        DOMAIN: '${DOMAIN}',
        PORT: '${PORT}',
        MERCHANT_SERVICE: {
          BASE_URL: '${MERCHANT_SERVICE_URL}'
        },
        USER_SERVICE: {
          BASE_URL: '${USER_SERVICE_URL}'
        },
        TOKEN_SERVICE: {
          BASE_URL: '${TOKEN_SERVICE_URL}'
        }
      }
    };
  }

  function getEmptyMock() {
    return {
      ENVIRONMENT: {
        NAME: '',
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
    };
  }

});
