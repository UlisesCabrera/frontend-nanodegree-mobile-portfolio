//npm install gulp gulp-uglify gulp-concat gulp-csso gulp-imagemin --save-dev
var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	cssmin = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('css', function(){
	return gulp.src('src/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('css-views', function(){
	return gulp.src('src/views/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist/views/css'))
});

gulp.task('scripts-views', function(){
	return gulp.src('src/views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'))
});

gulp.task('html', function(){
	return gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true,
					   minifyCSS :true,
					   minifyJS: true}))
		.pipe(gulp.dest('dist/'))
});

gulp.task('html-views', function(){
	return gulp.src('src/views/*.html')
		.pipe(htmlmin({collapseWhitespace: true,
					   minifyCSS :true,
					   minifyJS: true}))
		.pipe(gulp.dest('dist/views'))
});

gulp.task('images', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('images-views', function () {
    return gulp.src('src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/css/*.css',['css']);
	gulp.watch('src/views/css/*.css',['css-views']);
	gulp.watch('src/views/js/*.js',['scripts-views']);
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/views/*.html',['html-views']);
	gulp.watch('src/img/*',['images']);
	gulp.watch('src/views/images/*',['images-views']);
});

gulp.task('default', ['scripts', 'html','css','css-views','images', 'watch','images-views','html-views','scripts-views']);