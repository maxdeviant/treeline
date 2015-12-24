'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', () => {
    nodemon({
        script: 'src/index.js',
        ext: 'js'
    });
});

gulp.task('default', [
    'nodemon'
]);
