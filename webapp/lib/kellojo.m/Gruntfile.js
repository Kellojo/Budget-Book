module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-openui5');

    // Project configuration.
      grunt.initConfig({
        openui5_theme: {
          library: {
            files: [
              {
                expand: true,
                cwd: 'src',
                src: '**/themes/*/library.source.less',
                dest: 'src/'
              }
            ]
          }
        },
      });

    // A very basic default task.
    grunt.registerTask("default", "openui5_theme");

};