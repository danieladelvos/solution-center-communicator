# Solution Center Communicator
Tool for facilitating communication between the Zalando Solution Center and its APIs

[![Build Status](https://travis-ci.org/zalando-incubator/solution-center-communicator.svg?branch=master)](https://travis-ci.org/zalando-incubator/solution-center-communicator)

### Usage

Currently, the communicator is meant for indirect use via [solution-center-login](https://github.com/zalando-incubator/solution-center-login). See [Usage Instructions](https://github.com/zalando-incubator/solution-center-login#usage) for more info.
Direct use of the communicator is in the works.
	 
### Develop

Clone the repository, then run:

```shell
npm install
bower install
```

During development, use only the following command:

```shell
npm test
```

This command will perform required cleaning, linting, building and testing. Do not make a pull request unless you have run this command and verified its success.

Prior to pushing changes, run `npm run clean` to remove the `/dist` directory. Do not push the `/dist` directory.

### Release

Pull master branch and run `npm run release x.x.x` (see [Available Commands](#available-commands)) for more info.

#### Available commands

* `npm run build`: lint and build the project
* `npm test`: lint, build, and test the project
* `npm run lint`: lint source and spec files
* `npm run clean`: remove `/dist` directory
* `npm run release x.x.x` (where x.x.x is the specific version to release)
  * This command will perform most steps necessary for release, including:
    * `npm test`
    * `git add .`
    * `update version in package.json`
    * `changelog`
    * `git commit -am \"chore(release): version [supplied version]\"`
    * `git tag -a [supplied version] -m \"Version [supplied version]\"`
    * `git push origin master && git push origin [supplied version]`
  * **Note:** As a precaution, you must run `npm publish` manually after `npm run release x.x.x` successfully completes.

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
