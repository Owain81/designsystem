module.exports = function (grunt) {

    // Project configuration
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        express: {
            all: {
                options: {
                    bases: ['./'],
                    port: 9000,
                    hostname: "0.0.0.0"
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:9000'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    // Define task(s)
    grunt.registerTask('serve', ['express', 'open', 'express-keepalive']);
};
