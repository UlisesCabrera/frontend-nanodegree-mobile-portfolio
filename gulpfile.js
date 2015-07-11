//npm install gulp gulp-uglify gulp-concat gulp-csso gulp-imagemin --save-dev
var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	csso = require('gulp-csso'),
	imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/css/*.css',['css']);
});