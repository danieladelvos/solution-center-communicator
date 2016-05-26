describe('environments constant', function () {

  var environmentNames = ['PRODUCTION', 'STAGE', 'INTEGRATION', 'DEVELOPMENT', 'LOCAL', 'TESTING'];
  var config;

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

  ////////////////////

  function modules() {
    module('solution.center.communicator');
  }

  function injectors() {
    inject(function ($injector) {
      config = $injector.get('ENVIRONMENTS');
    });
  }

});
