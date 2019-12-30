module.exports = function(grunt) {

  const sass = require('node-sass');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/js/<%= pkg.main %>.js',
        dest: 'build/js/<%= pkg.main %>.min.js'
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },

      dist: {
        files: {
          'build/css/style.css': 'css/style.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/**/*.js'],
        dest: 'build/js/app.js'
      },
    },

    stripDebug: {
        dist: {
            files: {
                'js/app/script.js': 'build/js/script.js'
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('node-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-strip-debug');

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('sassComp', ['sass']);
  grunt.registerTask('concatJs', ['concat']);
  grunt.registerTask('stripIt', ['stripDebug']);

};