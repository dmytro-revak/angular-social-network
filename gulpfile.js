var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autopref = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
 
gulp.task('index', function() {
    gulp.src('./src/index.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/') );
});

gulp.task('views', function() {
    gulp.src('./src/app/views/*.pug')
        .pipe( pug() )
        .pipe( gulp.dest('build/app/views/') );
});

gulp.task('sass', function() {
    gulp.src('./src/assets/scss/main.scss')
        .pipe( sass() )
        .pipe( autopref() )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('build/assets/css/') );
});

gulp.task('jsLibs', function() {
    gulp.src( require('./dependencies.json').jsLibs )
        // .pipe( uglify() )
        .pipe( concat('libs.js') )
        .pipe( gulp.dest('build/assets/js/') );
});

gulp.task('jsApp', function() {
    gulp.src( require('./dependencies.json').jsApp )
        .pipe( ngAnnotate() )
        // .pipe( uglify() )
        .pipe( concat('app.js') )
        .pipe( gulp.dest('build/app/') );
});

gulp.task('server', function() {
    gulp.src('src/server.js')
        .pipe( uglify() )
        .pipe( gulp.dest('build/') );
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.pug', ['index', 'views']);
    gulp.watch('src/**/*.js', ['jsLibs', 'jsApp', 'server']);
});

gulp.task('build', ['index', 'views', 'sass', 'jsLibs', 'jsApp', 'server']);