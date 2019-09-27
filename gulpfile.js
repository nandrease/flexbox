const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
	return gulp
		.src('style.css')
		.pipe(
			autoprefixer()
		)
		.pipe(gulp.dest('build'));
});

gulp.task('watch', async function() {
	return gulp.watch('*.css', gulp.series('styles'));
});

gulp.task('default', (done) => {
	gulp.series('watch');
	done();
});
