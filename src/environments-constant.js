angular.module('solution.center.communicator')
    .constant('ENVIRONMENTS', {
      PRODUCTION: {
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
        }
      },
      STAGE: {
        NAME: 'STAGE',
        URL: 'https://sc-stage.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-stage.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-stage.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-stage.norris.zalan.do'
        }
      },
      INTEGRATION: {
        NAME: 'INTEGRATION',
        URL: 'https://sc-integration.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-integration.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-integration.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-integration.norris.zalan.do'
        }
      },
      DEVELOPMENT: {
        NAME: 'DEVELOPMENT',
        URL: 'https://sc-development.norris.zalan.do',
        DOMAIN: '.zalan.do',
        PORT: '',
        USER_SERVICE: {
          BASE_URL: 'https://um-development.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-development.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-development.norris.zalan.do'
        }
      },
      LOCAL: {
        NAME: 'LOCAL',
        URL: 'localhost',
        DOMAIN: 'localhost',
        PORT: 3333,
        USER_SERVICE: {
          BASE_URL: 'https://um-development.norris.zalan.do'
        },
        TOKEN_SERVICE: {
          BASE_URL: 'https://tm-development.norris.zalan.do'
        },
        MERCHANT_SERVICE: {
          BASE_URL: 'https://merchant-development.norris.zalan.do'
        }
      },
      TESTING: {
        NAME: 'TESTING',
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
    });
