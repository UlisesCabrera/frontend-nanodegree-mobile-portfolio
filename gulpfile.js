//npm install gulp gulp-uglify gulp-concat gulp-csso gulp-imagemin --save-dev
var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('html', function(){
	return gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true,
					   minifyCSS :true,
					   minifyJS: true}))
		.pipe(gulp.dest('dist/'))
});

gulp.task('images', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/img/*',['images']);
});

gulp.task('default', ['scripts', 'html', 'images', 'watch'])