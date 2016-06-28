var chalk = require('chalk');

module.exports = function(config) {

  var file = 'dist/solutioncenter.communicator{{type}}.js',
      type = (config.testType && '.' + config.testType) || '';

  // src or .min file
  file = file.replace('{{type}}', type);

  console.log(chalk.yellow('[ Testing ' + chalk.inverse(file) + ' ]'));

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      file,
      'test/**/*.spec.js'
    ],
    reporters: ['dots'],
    exclude: [],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    singleRun: true
  });
};
