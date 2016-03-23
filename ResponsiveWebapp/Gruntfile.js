module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            concat: {   
				dist: {
					src: [
						'js/libs/*.js', // All JS in the libs folder
						'js/global.js'  // This specific file
					],
					dest: 'js/build/production.js',
				}
			}
        },
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: "800px",
						suffix: "_big",
						quality:50
					},
					{
						width: "310px",
						suffix: "_medium",
						quality:30
					},
					{
						width: "100px",
						suffix: "_small",
						quality:30
					}]
				},

				/*
				 You don't need to change this part if you don't change
				 the directory structure.
				 */
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['images']
			},
		},

		/* Generate the images directory if it is missing */
		mkdir: {
			dev: {
				options: {
					create: ['images']
				},
			},
		},

		/* Copy the "fixed" images that don't go through processing into the images/directory */
		copy: {
			dev: {
				files: [{
					expand: true,
					src: 'images_src/*.{gif,jpg,png}',
					dest: 'images/'
				}]
			},
		},
    });

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');

	grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'concat', 'responsive_images']);

};