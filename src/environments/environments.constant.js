module.exports.DEFAULT_ENVIRONMENT = 'INTEGRATION';
module.exports.ENVIRONMENTS = {
  PRODUCTION: {
    NAME: 'PRODUCTION',
    URL: 'https://solutions.zalando.com',
    DOMAIN: 'solutions.zalando.com',
    PORT: '',
    USER_SERVICE_OLD: 'https://user-management.norris.zalan.do',
    TOKEN_SERVICE_OLD: 'https://token-management.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-management.norris.zalan.do',
    GOODDATA_SERVICE: 'https://gooddata.norris.zalan.do',
    MODULE_SERVICE: 'https://module-service.norris.zalan.do',
    USER_SERVICE: 'https://user-service.norris.zalan.do',
    USER_MANAGEMENT: 'https://account.solutions.zalando.com'
  },
  STAGE: {
    NAME: 'STAGE',
    URL: 'https://sc-stage.norris.zalan.do',
    DOMAIN: '.zalan.do',
    PORT: '',
    USER_SERVICE_OLD: 'https://um-stage.norris.zalan.do',
    TOKEN_SERVICE_OLD: 'https://tm-stage.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-stage.norris.zalan.do',
    GOODDATA_SERVICE: 'https://gooddata-stage.norris.zalan.do',
    MODULE_SERVICE: 'https://ms-stage.norris.zalan.do',
    USER_SERVICE: 'https://us-stage.norris.zalan.do',
    USER_MANAGEMENT: 'https://account-stage.norris.zalan.do'
  },
  INTEGRATION: {
    NAME: 'INTEGRATION',
    URL: 'https://sc-integration.norris.zalan.do',
    DOMAIN: '.zalan.do',
    PORT: '',
    USER_SERVICE_OLD: 'https://um-integration.norris.zalan.do',
    TOKEN_SERVICE_OLD: 'https://tm-integration.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-integration.norris.zalan.do',
    GOODDATA_SERVICE: 'https://gooddata-integration.norris.zalan.do',
    MODULE_SERVICE: 'https://ms-integration.norris.zalan.do',
    USER_SERVICE: 'https://us-integration.norris.zalan.do',
    USER_MANAGEMENT: 'https://account-integration.norris.zalan.do'
  },
  LOCAL: {
    NAME: 'LOCAL',
    URL: 'http://localhost',
    DOMAIN: 'localhost',
    PORT: 3333,
    USER_SERVICE_OLD: 'https://um-integration.norris.zalan.do',
    TOKEN_SERVICE_OLD: 'https://tm-integration.norris.zalan.do',
    MERCHANT_SERVICE: 'https://merchant-integration.norris.zalan.do',
    GOODDATA_SERVICE: 'https://gooddata-integration.norris.zalan.do',
    MODULE_SERVICE: 'https://ms-integration.norris.zalan.do',
    USER_SERVICE: 'https://us-integration.norris.zalan.do',
    USER_MANAGEMENT: 'https://account-integration.norris.zalan.do'
  },
  TESTING: {
    NAME: 'TESTING',
    URL: '',
    DOMAIN: '',
    PORT: '',
    USER_SERVICE_OLD: '',
    TOKEN_SERVICE_OLD: '',
    MERCHANT_SERVICE: '',
    GOODDATA_SERVICE: '',
    MODULE_SERVICE: '',
    USER_SERVICE: '',
    USER_MANAGEMENT: ''
  }
};
