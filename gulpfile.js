const autoprefixer = require('gulp-autoprefixer');
const { src, dest, watch, series, parallel } = require('gulp');

function styles() {
	return src('style.css').pipe(autoprefixer()).pipe(dest('build'));
}

function html() {
	return src('./index.html').pipe(dest('build'));
}

function watchTask() {
	return watch('*.css', series('styles'));
}
// gulp.task('watch', async function() {
// 	return gulp.watch('*.css', series('styles'));
// });

exports.default = series(styles, html);
// gulp.task('default', (done) => {
// 	// series('styles');
// 	gulp.parallel(['copy', 'styles']);
// 	done();
// });
