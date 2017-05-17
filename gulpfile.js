var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autopref = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
    gulp.src('./src/**/*.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('sass', function() {
    gulp.src('./src/assets/scss/main.scss')
        .pipe( sass() )
        .pipe( autopref() )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('build/public/css/') );
});

gulp.task('js', function() {
    gulp.src( require('./dependencies.json').js )
        .pipe( uglify() )
        .pipe( concat('libs.js') )
        .pipe( gulp.dest('build/public/js/') );
});

gulp.task('server', function() {
    gulp.src('src/server.js')
        .pipe( uglify() )
        .pipe( gulp.dest('build/') );
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
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/**/*.js', ['js', 'server']);
});

gulp.task('build', ['pug', 'sass', 'js', 'server']);