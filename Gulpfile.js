// Gulpfile.js

const gulp 			= require('gulp');
const chalk 		= require('chalk');
const sass 			= require('gulp-sass');
const browserify 	= require('browserify');
const source 		= require('vinyl-source-stream');
const buffer		= require('vinyl-buffer');
const babel 		= require('babelify');
const swPrecache 	= require('sw-precache');
const path 			= require('path');

const BUILD_DIR = './dist';
// This task compiles sass into css.
gulp.task('styles', ()=> {
	return gulp.src('./src/css/main.scss')
		.pipe(sass())
		.on('error', handleError)
		.pipe(gulp.dest(BUILD_DIR));
});

// This task bundles our scripts using browserify.
gulp.task('scripts', ()=> {
	return browserify('./src/js/main.js')
		.transform(babel, {presets: ["react", "es2015"]})
		.bundle()
		.on('error', handleError)
		.pipe(source('app.js'))
		.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('generate-service-worker', () => {
  let serviceWorkerFile = path.join(BUILD_DIR, 'service-worker.js');

  return swPrecache.write(serviceWorkerFile, {
    // Ensure all our static, local assets are cached.
    staticFileGlobs: [
      `${BUILD_DIR}/app.js`,
      `${BUILD_DIR}/main.css`,
      `${BUILD_DIR}/index.html`
    ],

    // Define the dependencies for the server-rendered /shell URL,
    // so that it's kept up to date.
    // dynamicUrlToDependencies: {
    //   '/shell': [
    //     ...glob.sync(`${BUILD_DIR}/rev/js/**/*.js`),
    //     ...glob.sync(`${BUILD_DIR}/rev/styles/all*.css`),
    //     `${SRC_DIR}/views/index.handlebars`
    //   ]
    // },

    // Brute force server worker routing:
    // Tell the service worker to use /shell for all navigations.
    // E.g. A request for /guides/12345 will be fulfilled with /shell
    // navigateFallback: '/shell',

    // Various runtime caching strategies: sets up sw-toolbox handlers.
    runtimeCaching: [{
	      urlPattern: /https:\/\/maxcdn\.bootstrapcdn\.com\/font-awesome\/4.5.0\/css\/font-awesome\.min\.css/,
	      // Effectively "stale while revalidate".
	      handler: 'cacheFirst'
	    },
	    {
	      urlPattern: /https:\/\/fonts\.googleapis\.com\/css\?family=Lato:300,400,700/,
	      // Effectively "stale while revalidate".
	      handler: 'cacheFirst'
	    },
	    {
	      // Use a network first strategy for everything else.
	      default: 'networkFirst'
	    }
	],

    // End of interesting bits...

    cacheId: 'thoughtjar',
    stripPrefix: 'dist/',
    verbose: true
  });
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

gulp.task('default', ['scripts', 'styles', 'generate-service-worker', 'watch']);