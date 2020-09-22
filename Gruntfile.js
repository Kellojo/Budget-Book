module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-openui5');

    // Project configuration.
    grunt.initConfig({
        openui5_preload: {
            library: {
                options: {
                    resources: {
                        cwd: 'src/webapp/lib/kellojo.m/',
                        prefix: 'kellojo.m',
                        src: [
                            '**/*.js',
                            '**/*.fragment.html',
                            '**/*.fragment.json',
                            '**/*.fragment.xml',
                            '**/*.view.html',
                            '**/*.view.json',
                            '**/*.view.xml',
                            '**/*.control.xml',
                            '**/*.properties'
                        ]
                    },
                    dest: 'src/webapp/lib/kellojo.m/'
                },
                libraries: true
            },
            component: {
                options: {
                    resources: {
                        cwd: 'src/webapp',
                        prefix: 'budgetBook',
                        src: [
                            '*/*.js',
                            '*.js',
                            'Component.js',
                            '**/assert.js',
                            '**/*.controller.js',
                            '**/manager/*.js',
                            '**/*.fragment.html',
                            '**/*.fragment.json',
                            '**/*.fragment.xml',
                            '**/*.view.html',
                            '**/*.view.json',
                            '**/*.view.xml',
                            '**/*.properties',

                            '!thirdparty/**',
                        ]
                    },
                    dest: "src/webapp",
                    compress: true,
                },
                components: true
            },
        },
    });

    // A very basic default task.
    grunt.registerTask("default", "openui5_preload");

};