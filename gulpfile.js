"use strict";
import imagemin from 'gulp-imagemin';
import gulp from 'gulp';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

const dist = "./dist";

gulp.task('build-html', function () {
    return gulp.src("./src/*.html")
           .pipe(htmlmin({ collapseWhitespace: true }))
           .pipe(gulp.dest("dist/"));
});

gulp.task('images', function () {
    return gulp.src("./src/assets/img/*")
           .pipe(imagemin())
           .pipe(gulp.dest("dist/assets/img"));
});

gulp.task('icons', function () {
    return gulp.src("src/assets/icons/*")
           .pipe(gulp.dest("dist/assets/icons"));
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browserSync.reload);
});