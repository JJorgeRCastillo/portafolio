'use-strict';

module.exports = function(grunt) {
    
 grunt.initConfig({
    jshint: {
      files: ['js/**/*.js'],
      options: {
      }
    },
    watch: {
        scripts: {
            files: ['js/**/*.js'],
            tasks: ['jshint'],
            options: {
                spawn: false,
            }            
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);    

};