/* eslint-disable angular/di */

describe('constants', function () {

  var environmentNames = ['PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'],
      environmentProps = [
        'NAME', 'URL', 'DOMAIN', 'PORT', 'USER_SERVICE', 'TOKEN_SERVICE_OLD',
        'MERCHANT_SERVICE', 'GOODDATA_SERVICE', 'MODULE_SERVICE', 'USER_SERVICE_OLD'
      ],
      config,
      defaultEnvironment;

  beforeEach(function () {
    modules();
    injectors();
  });

  it('should contain all environment types', function () {
    environmentNames.forEach(function (name) {
      var env = config[name];
      expect(env).toEqual(jasmine.any(Object));
      expect(env.NAME).toBe(name);
    });
  });

  it('should contain all environment properties', function () {
    environmentNames.forEach(function (name) {
      var env = config[name];

      environmentProps.forEach(function (prop) {
        expect(env[prop]).toBeDefined();
      });
    });
  });

  it('should contain a default environment', function () {
    expect(defaultEnvironment).toBeDefined();
  });

  ////////////////////

  function modules() {
    module('solutioncenter.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      config = $injector.get('ENVIRONMENTS');
      defaultEnvironment = $injector.get('DEFAULT_ENVIRONMENT');
    });
  }

});
