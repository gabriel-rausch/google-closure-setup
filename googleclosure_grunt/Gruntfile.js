'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  var compilerPackage = require('google-closure-compiler');
  compilerPackage.grunt(grunt);

  grunt.initConfig({
    connect: {
      localserver: {
        options: {
          hostname: '*',
          port: 8080,
          base: './',
          keepalive: true
        }
      }
    },
    'closure-compiler': {
      my_target: {
        options: {
          js: ['myproject/start.js', 'node_modules/google-closure-library/**.js'],
          entry_point: 'goog:myproject.start',
          js_output_file: 'myproject/start-compiled.js',
          compilation_level: 'ADVANCED',
          dependency_mode: 'STRICT',
          language_in: 'ECMASCRIPT5_STRICT'
        }
      }
    }
  });

  grunt.registerTask('default', ['connect']);
};
