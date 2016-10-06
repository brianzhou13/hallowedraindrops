module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        // adjusting the 'test' to ONLY be backend for now
        src: ['test/ServerSpec.js']
      }
    },

    // BELOW IS CODE FOR FRONT-END MOCHA TESTING WITH PHANTOMJS
    // CURRENTLY IT DOESN'T WORK
    // mocha: {
    //   all: {
    //     src: ['test/**/*.js'],
    //   },
    //   options: {
    //     log: true,
    //     logErrors: true,
    //     growlOnSuccess: true,
    //     run: true
    //   }
    // },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },
    

    eslint: {
      target: [
        'server/*.js',
        'server/**/*.js'
      ]
    },

    // cssmin: {
    // },

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  // grunt.registerTask('fet', [
  //   'mocha'
  // ]);

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('start', [
    'nodemon'
  ]);

  grunt.registerTask('build', [
    'cssmin'
  ]);

};