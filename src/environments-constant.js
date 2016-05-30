angular.module('solution.center.communicator')
    .constant('DEFAULT_ENVIRONMENT', 'LOCAL')
    .constant('ENVIRONMENTS', {
      PRODUCTION: {
        NAME: 'PRODUCTION',
        URL: 'https://solutions.zalando.com',
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
        URL: 'localhost',
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
    });
