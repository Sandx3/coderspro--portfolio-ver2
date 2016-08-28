module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			dev: {
				files: {
					'assets/styles/stylesheet.css': 'assets/styles/app.less'
				}
			}
		},
		nggettext_extract: {
			pot: {
				files: {
					'po/template.pot': ['*/**/*.html', '**/*.js', '!node_modules/**']
				}
			}
		},
		nggettext_compile: {
			all: {
				options: {
					module: 'myApp'
				},
				files: {
					'js/translations.js': ['po/*.po']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-angular-gettext');
};