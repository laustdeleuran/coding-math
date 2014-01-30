// Generated on 2014-01-08 using generator-webapp 0.4.6
'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({
		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: [
					'app/{,*/}*.js'
				],
				tasks: ['concat', 'jshint'],
				options: {
					livereload: true
				}
			},
			gruntfile: {
				files: ['gruntfile.js']
			},
			compass: {
				files: ['app/_styles/modules/**/*.{scss,sass}', 'app/_styles/*.{scss,sass}'],
				tasks: ['compass:server']
			},
			styles: {
				files: ['app/_styles/{,*/}*.css'],
				tasks: ['newer:copy:styles']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'app/{,*/}{,*/}/*.html',
					'app/_styles/{,*/}*.css',
					'.tmp/app/_styles/{,*/}*.css',
					'epidsodes/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
				]
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 1508,
				livereload: 35729,
				// Change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'app'
					]
				}
			}
		},

		// Empties folders to start fresh
		clean: {
			server: '.tmp'
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'gruntfile.js',
				'app/{,*/}*.js'
			]
		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass: {
			options: {
				sassDir: 'app/_styles',
				cssDir: 'app/_styles',
				generatedImagesDir: '.tmp/app/_images/generated',
				imagesDir: 'app/_images',
				javascriptsDir: 'app/*',
				fontsDir: 'app/_fonts',
				importPath: 'app/_components',
				httpImagesPath: '/app/_images',
				httpGeneratedImagesPath: '/app/_images/generated',
				httpFontsPath: '/app/_fonts',
				relativeAssets: true,
				assetCacheBuster: false
			},
			server: {
				options: {
					debugInfo: true,
					environment: 'development'
				}
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			styles: {
				expand: true,
				dot: true,
				cwd: 'app/_styles',
				dest: '.tmp/app/_styles/',
				src: '{,*/}*.css'
			}
		},
	});

	grunt.registerTask('serve', [
		'clean:server',
		'compass:server',
		'connect:livereload',
		'watch'
	]);

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});
};