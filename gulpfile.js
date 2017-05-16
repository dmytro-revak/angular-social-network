var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autopref = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
    gulp.src('./src/index.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('sass', function() {
    gulp.src('./src/assets/scss/main.scss')
        .pipe( sass() )
        .pipe( autopref() )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('build/assets/css/') );
});

gulp.task('js', function() {
    gulp.src( require('./dependencies.json').js )
        .pipe( uglify() )
        .pipe( concat('libs.js') )
        .pipe( gulp.dest('build/assets/js/') );
});

gulp.task('img', function () {
    gulp.src('./src/images/*')
        .pipe( imagemin({
            progressive: true,
            optimizationLevel: 8
        }) )
        .pipe( gulp.dest('build/images') );
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.pug', ['pug']);
});

gulp.task('build', ['pug', 'sass', 'js']);