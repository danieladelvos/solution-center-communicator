# Solution Center Communicator
Tool for facilitating communication between the Zalando Solution Center and its APIs

### Installation

Install via bower or npm

```shell
bower install solution-center-communicator
npm install solution-center-communicator
```

### Usage

1. Load the script in your `<head>` from Bower or NPM:

  ```html
  <script src="../bower_components/solution-center-communicator/dist/solution-center-communicator.js"></script>
  <script src="../node_modules/solution-center-communicator/dist/solution-center-communicator.js"></script>
  ```
  
2. Add [sc-authentication](https://github.com/zalando-incubator/solution-center-login) as a module dependency:

  ```javascript
  angular.module('my-module', ['sc-authentication']);
  ```
  
3. Configure the application by injecting **authenicationServiceProvider** in your config block and setting the environment.

  ```javascript.config(['authenticationServiceProvider', function(authenticationServiceProvider) {
    authenticationServiceProvider.configEnvironment('STAGE');
  }
  ```
  Environment options:
    * 'LOCAL'
    * 'INTEGRATION'
    * 'STAGE'
    * 'PRODUCTION'
	 
### Develop

Clone the repository, then run:

```shell
npm install
bower install
```

Install Gulp via npm if you don't have it
```shell
npm install -g gulp
```

#### Available commands

* `gulp`: build and test the project
* `gulp build`: build and lint the project, creating new files in `dist`
* `gulp test`: build, lint, and run tests

### License
The MIT License (MIT) Copyright © 2016 Zalando SE, [https://tech.zalando.com](https://tech.zalando.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
