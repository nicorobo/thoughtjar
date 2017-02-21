// Gulpfile.js

const gulp 			= require('gulp');
const chalk 		= require('chalk');
const sass 			= require('gulp-sass');
const browserify 	= require('browserify');
const source 		= require('vinyl-source-stream');
const buffer		= require('vinyl-buffer');
const babel 		= require('babelify');

// This task compiles sass into css.
gulp.task('styles', ()=> {
	return gulp.src('./src/css/main.scss')
		.pipe(sass())
		.on('error', handleError)
		.pipe(gulp.dest('./dist'));
});

// This task bundles our scripts using browserify.
gulp.task('scripts', ()=> {
	return browserify('./src/js/main.js')
		.transform(babel, {presets: ["react", "es2015"]})
		.bundle()
		.on('error', handleError)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist'));
});

function handleError(err) {
	console.log(chalk.red(`Error file ${err.filename}`));
	console.log(err.codeFrame);
	this.emit('end');
}

// This task keeps an eye on our source files and rebuilds them when they change.
gulp.task('watch', ()=> {
	gulp.watch('./src/css/**/*.scss', 	['styles']);
	gulp.watch('./src/js/**/*.js', 		['scripts']);
})

gulp.task('default', ['scripts', 'styles', 'watch']);