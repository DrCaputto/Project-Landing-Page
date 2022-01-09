let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('style-build.css', function(){
    gulp.src("style-build.css");
        pipe(autoprefixer());
        pipe(gulp.dest('style'))
});