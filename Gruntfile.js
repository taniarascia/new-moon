module.exports = function(grunt) {
  /* Load Plugins */

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-compress')
  grunt.loadNpmTasks('grunt-bump')

  grunt.initConfig({
    pkg: '<json:package.json>',
    compress: {
      main: {
        options: {
          archive: 'theme-extension.zip',
          mode: 'zip',
        },
        files: [
          {
            cwd: 'theme-extension/',
            src: '**/*',
            expand: true,
          },
        ],
      },
    },
    less: {
      generate: {
        options: {
          compress: true,
          ieCompat: false,
        },
        files: {
          'theme-extension/stable.css': 'less/build-stable.less',
          'theme-extension/canary.css': 'less/build-canary.less',
        },
      },
      build: {
        options: {
          compress: true,
        },
        files: {
          'theme-extension/stable.css': 'less/build-stable.less',
          'theme-extension/canary.css': 'less/build-canary.less',
        },
      },
    },
    watch: {
      canary: {
        files: [ 'less/*.less', 'themes/*.less' ],
        tasks: [ 'less:generate' ],
      },
    },
  })

  grunt.registerTask('default', [ 'less:generate' ])
  grunt.registerTask('package', [ 'less:build', 'compress' ])
}
