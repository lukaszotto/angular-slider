/**
 * Grunt Module
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                  style: 'expanded'
                },
                files: {
                  'css/style.css' : 'sass/style.sass'
                }
            },
            dist: {
                options: {
                  style: 'compressed'
                },
                files: {
                  'css/style.css' : 'sass/style.sass'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**.sass',
                tasks: 'sass'
            }            
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['sass:dev']);
};    