# Solution Center Communicator
Configuration tool for users of the Solution Center of Brand Solutions

[![Build Status](https://travis-ci.org/zalando/solution-center-communicator.svg?branch=master)](https://travis-ci.org/zalando/solution-center-communicator)

### Installation

Install via bower

```shell
bower install solution-center-communicator
```

Install via npm

```shell
npm install solution-center-communicator
```

### Usage

1. Load the script in your `<head>` from Bower:

    ```html
    <script src="../bower_components/solution-center-communicator/dist/solution-center-communicator.js"></script>
    ```
    
    Or from NPM:
    
    
    ```html
    <script src="../node_modules/solution-center-communicator/dist/solution-center-communicator.js"></script>
    ```
	 
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
* `gulp build`: build the project and make new files in`dist`
* `gulp serve`: start a server to serve the demo page and launch a browser then watches for changes in `src` files to reload the page
* `gulp test`: run tests
* `gulp serve-test`: runs tests and keep test browser open for development. Watches for changes in source and test files to re-run the tests

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
