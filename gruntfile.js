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
					'episodes/{,*/}*.js'
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
				files: ['episodes/_styles/modules/**/*.{scss,sass}', 'episodes/_styles/*.{scss,sass}'],
				tasks: ['compass:server']
			},
			styles: {
				files: ['episodes/_styles/{,*/}*.css'],
				tasks: ['newer:copy:styles']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'episodes/{,*/}*.html',
					'.tmp/episodes/_styles/{,*/}*.css',
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
						'episodes'
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
				'episodes/{,*/}*.js'
			]
		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass: {
			options: {
				sassDir: 'episodes/_styles',
				cssDir: 'episodes/_styles',
				generatedImagesDir: '.tmp/episodes/_images/generated',
				imagesDir: 'episodes/_images',
				javascriptsDir: 'episodes/*',
				fontsDir: 'episodes/_fonts',
				importPath: 'episodes/_components',
				httpImagesPath: '/episodes/_images',
				httpGeneratedImagesPath: '/episodes/_images/generated',
				httpFontsPath: '/episodes/_fonts',
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
				cwd: 'episodes/_styles',
				dest: '.tmp/_styles/',
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