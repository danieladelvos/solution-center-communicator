// Type definitions for Solution Center Communicator 2.2.0
// Project: https://github.com/zalando-incubator/solution-center-communicator
// Definitions by: Damián García <https://github.com/dami-gg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ScCommunicator {

  interface Environment {
    /**
     * Name of the environment
     */
    NAME: string;

    /**
     * URL where to reach the frontend of the environment
     */
    URL: string;

    /**
     * Domain where to set a cookie in case it's needed for that environment
     */
    DOMAIN: string;

    /**
     * In case that the domain is localhost, a port can be also specified
     */
    PORT?: string;

    /**
     * URL where to reach the user management service API
     */
    USER_SERVICE?: string;

    /**
     * URL where to reach the token management service API
     */
    TOKEN_SERVICE?: string;

    /**
     * URL where to reach the merchant management service API
     */
    MERCHANT_SERVICE?: string;

    /**
     * URL where to reach the GoodData service API
     */
    GOODDATA_SERVICE?: string;

    /**
     * URL where to reach the module service API
     */
    MODULE_SERVICE?: string;
  }

  interface Environments {
    /**
     * Production environment
     */
    PRODUCTION: Environment;

    /**
     * Stage environment
     */
    STAGE: Environment;

    /**
     * Integration environment
     */
    INTEGRATION: Environment;

    /**
     * Local environment
     */
    LOCAL: Environment;

    /**
     * Testing environment
     */
    TESTING: Environment;
  }

  interface ScEnvironmentsProvider {

    /**
     * Get current environment
     * If environment was not previously configured, use default environment
     *
     * @public
     * @returns {Object} Current or default environment
     */
    getCurrentEnvironment(): Environment;

    /**
     * Get specific environment
     *
     * @public
     * @param {string} name - Environment name
     * @returns {Object} Specific or default environment
     */
    getSpecificEnvironment(name: string): Environment;

    /**
     * Set current environment
     *
     * @public
     * @param {string|Object} env - Environment name or custom environment object
     * @returns {Object} Named or custom environment
     */
    setCurrentEnvironment(environment: Environment): Environment;

    /**
     * Access to the public methods of the service
     */
    $get(): any;
  }
}

declare module "solution-center-communicator" {
  export = ScCommunicator;
}
