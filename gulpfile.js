// Подключаем модули gulp
const gulp = require('gulp');
const concat = require('gulp-concat');
const rigger = require('gulp-rigger');
const sass = require('gulp-sass'); sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');
const { task } = require('gulp');
const browserSync = require('browser-sync').create();

//!===========================================================================

//Массивы адресов файлов                                                                                                       
const htmlFiles = [
    './#source/html/index.html',
    './#source/html/blog.html',
    './#source/html/article.html',
    './#source/html/contacts.html',
    './#source/html/search-results.html',
    './#source/html/category.html',
    './#source/html/payment-and-delivery.html',
    './#source/html/ordering.html',
    './#source/html/product-comparison.html',
    './#source/html/product-page.html'
];                            
const scssFiles = ['./#source/scss/style.scss'];

const headerJs = ['./#source/js/header.js'];
const libJs = ['./#source/js/lib.js'];
const sliderJs = ['./#source/js/slider.js', './#source/js/product-slider.js'];

//!===========================================================================

// Функция для таска html
function html() {
    //Передача адресов файлов
    return gulp.src(htmlFiles)
    //Риггер файлов
    .pipe(rigger())
    //Выходная папка
    .pipe(gulp.dest('./'))
    //Обновление страницы браузера
    .pipe(browserSync.stream());
}

// Функция для таска styles
function styles() {
    //Передача адресов файлов
    return gulp.src(scssFiles)
    //Компиляция в CSS
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //Автопрефиксер
    .pipe(autoprefixer({cascade: false}))
    //Выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
    //Обновление страницы браузера
    .pipe(browserSync.stream());
}

function libScript() {
    //Передача адресов файлов
    return gulp.src(libJs)
    //Конкатинация файлов
    .pipe(concat('lib.js'))
    //Минификация кода JS
    .pipe(uglify())
    //Выходная папка для скриптов
    .pipe(gulp.dest('./build/js'))
    //Обновление страницы браузера
    .pipe(browserSync.stream());
}

// Функция для таска scripts
function scripts() {
    //Передача адресов файлов
    return gulp.src(headerJs)
    //Конкатинация файлов
    .pipe(concat('header.js'))
    //Минификация кода JS
    .pipe(uglify())
    //Выходная папка для скриптов
    .pipe(gulp.dest('./build/js'))
    //Обновление страницы браузера
    .pipe(browserSync.stream());
}
// Функция для таска sliderScripts
function sliderScripts() {
    //Передача адресов файлов
    return gulp.src(sliderJs)
    //Конкатинация файлов
    .pipe(concat('slider.js'))
    //Минификация кода JS
    .pipe(uglify())
    //Выходная папка для скриптов
    .pipe(gulp.dest('./build/js'))
    //Обновление страницы браузера
    .pipe(browserSync.stream());
}

// Функция удаления файлов
function clean() {
    return del(['./*.html', './build/*.css', './build/*.js']);
}

// Функция watch - сделить за изменением кода в файлах
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //Cделить за изменением кода в HTML файлах
    gulp.watch('./#source/html/**/*.html', html)
    //Cделить за изменением кода в SCSS файлах
    gulp.watch('./#source/scss/**/*.scss', styles)
    //Cделить за изменением кода в JS файлах
    gulp.watch('./#source/js/**/*.js', scripts);
    gulp.watch('./#source/js/**/*.js', libScript);
    gulp.watch('./#source/js/**/*.js', sliderScripts);
}

//!===========================================================================

//Таски вызывающие функции html, styles и scripts
gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('libScript', libScript);
gulp.task('sliderScripts', sliderScripts);
//Таск удаления файлов
gulp.task('del', clean);
//Таск запускающий все функции кроме watch
gulp.task('build', gulp.series(clean, gulp.parallel(html, styles, scripts, libScript, sliderScripts)));
//Таск отслеживающий изменения кода в файлах
gulp.task('watch', watch);
//Таск последовательно запускающий таски build и watch
gulp.task('dev', gulp.series('build', 'watch'));