const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
    gulp.src('static/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('static/css'))
})

gulp.task('default', ['sass'], () => {
    gulp.watch('static/scss/**/*.scss', ['sass'])
})