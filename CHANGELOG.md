<a name="4.1.0"></a>
# [4.1.0](https://github.com/zalando-incubator/solution-center-communicator/compare/4.0.0...v4.1.0) (2017-04-12)


### Features

* **environments:** add user management frontend urls ([d3a78d6](https://github.com/zalando-incubator/solution-center-communicator/commit/d3a78d6))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/zalando-incubator/solution-center-communicator/compare/3.0.0...v4.0.0) (2017-02-21)


### Features

* **environments:** remove DEVELOPMENT environment and point LOCAL to INTEGRATION urls ([7544783](https://github.com/zalando-incubator/solution-center-communicator/commit/7544783))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/zalando-incubator/solution-center-communicator/compare/2.3.0...v3.0.0) (2017-02-08)


### Features

* **environments:** update user and token service URLs ([925c76f](https://github.com/zalando-incubator/solution-center-communicator/commit/925c76f))


### BREAKING CHANGES

* environments: USER_SERVICE and TOKEN_SERVICE keys have changed to
  USER_SERVICE_OLD and TOKEN_SERVICE_OLD, USER_SERVICE now points
  to the new user/token service, TOKEN_SERVICE has been removed

  To use the new user/token service, use USER_SERVICE:

  ```js
  var env = ScEnvironmentsProvider.getCurrentEnvironment();
  var tokenEndpoint = env.USER_SERVICE + '/tokens';
  var userEndpoint = env.USER_SERVICE + '/users';
  ```

  If you need to continue using the old services, change your code from this:

  ```js
  var env = ScEnvironmentsProvider.getCurrentEnvironment();
  var oldTokenEndpoint = env.TOKEN_SERVICE + '/tokens';
  var oldUserEndpoint = env.USER_SERVICE + '/users';
  ```

  To this:

  ```js
  var env = ScEnvironmentsProvider.getCurrentEnvironment();
  var oldTokenEndpoint = env.TOKEN_SERVICE_OLD + '/tokens';
  var oldUserEndpoint = env.USER_SERVICE_OLD + '/users';
  ```



<a name="2.3.0"></a>
# [2.3.0](https://github.com/zalando-incubator/solution-center-communicator/compare/2.2.0...v2.3.0) (2016-11-16)


### Features

* **services:** add new user service URL ([dc11eb](https://github.com/zalando-incubator/solution-center-communicator/commit/dc11eb))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/zalando-incubator/solution-center-communicator/compare/2.1.0...v2.2.0) (2016-08-22)


### Features

* **services:** add new module service URLs ([38c4b2c](https://github.com/zalando-incubator/solution-center-communicator/commit/38c4b2c))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/zalando-incubator/solution-center-communicator/compare/2.0.0...v2.1.0) (2016-08-08)


### Features

* **services:** add new service url ([7bbe735](https://github.com/zalando-incubator/solution-center-communicator/commit/7bbe735))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/zalando-incubator/solution-center-communicator/compare/1.0.1...v2.0.0) (2016-07-13)


### Features

* **module:** update module name to align with SC style guide ([cc9caaf](https://github.com/zalando-incubator/solution-center-communicator/commit/cc9caaf)), closes [#11](https://github.com/zalando-incubator/solution-center-communicator/issues/11)


### BREAKING CHANGES

* modules: Module names have changed. `scEnvironments` is now called `ScEnvironments`.



<a name="1.0.1"></a>
## [1.0.1](https://github.com/zalando-incubator/solution-center-communicator/compare/1.0.0...v1.0.1) (2016-06-29)


### Bug Fixes

* **npm-scripts:** remove postinstall script and call to bower verify ([95a7a3c](https://github.com/zalando-incubator/solution-center-communicator/commit/95a7a3c))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/zalando-incubator/solution-center-communicator/compare/0.1.2...1.0.0) (2016-06-28)


### Features

* **modules:** convert to module format ([aff7806](https://github.com/zalando-incubator/solution-center-communicator/commit/aff7806))
* **npm-scripts:** replace gulp with npm scripts ([057bd8d](https://github.com/zalando-incubator/solution-center-communicator/commit/057bd8d))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/zalando-incubator/solution-center-communicator/compare/0.1.1...0.1.2) (2016-06-08)


### Bug Fixes

* **environments-constant:** use protocol for LOCAL.URL [#2](https://github.com/zalando-incubator/solution-center-communicator/issues/2) ([b94cf3f](https://github.com/zalando-incubator/solution-center-communicator/commit/b94cf3f))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/zalando-incubator/solution-center-communicator/compare/0.1.0...0.1.1) (2016-06-06)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/zalando-incubator/solution-center-communicator/compare/f4502b0...0.1.0) (2016-06-01)


### Features

* **Initial release:** Solution Center Communicator ([7e2deb](https://github.com/zalando-incubator/solution-center-communicator/commit/7e2deb))



