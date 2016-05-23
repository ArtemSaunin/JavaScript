module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
		options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		combine: {
			files: {
				'css/dist/style.min.css': ['css/src/*.css']
			}
		}
	},
	concat: {
		options: {
			separator: ';'
		},
		dist: {
			src: ['js/src/*.js'],
			dest: 'js/dist/script.min.js'
		}
	},
	uglify: {
		dist: {
			src: ['js/dist/script.min.js'],
			dest: 'js/dist/script.min.js'
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};