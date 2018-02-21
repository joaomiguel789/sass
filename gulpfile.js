var gulp = require ('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Criação de variaveis
var scssFiles = './src/sass/style.scss';
var cssDest = './css';

// Opção para desenvolvimento
var sassDevOptions = {
    outputStyle : 'expanded'
};

// Produção
var sassProdOptions = {
    outputStyle : 'compressed'
};

// TASK 'sass' - executar gulp sassdev
gulp.task('sassdev', function(){
    //console.log('sassdev');
    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions) .on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

//TASK ''sassprod' - executar gulp sassprod

gulp.task ('sassprod', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions) .on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

//TASK 'watch - executar gulp watch
gulp.task('watch',function(){
        gulp.watch(scssFiles, ['sassdev', 'sassprod']);
}); 



