

make a build scripts based on
1. gulp using modules
   * gulp-scss
   * gulp-browserify to utilise commonjs requires
2. webpack

the build scrips should:
* create a target folder named 'build'
* copy static assets to the /build folder
  * /index.html
  * /img/*  
* run scss task to build css asset
  * build/app.css
  * entry point is src/styles/app.scss
  * (extra) use autoprefixer
* run js bundler to build static js assets
  * vendor.js 
     * jquery
     * lodash
  * app.js
     * entry point is src/scripts/app.js
* run webserver with livereload
  * gulp-webserver
  * webpack-devserver
* (extra) make a production build
  * use gulp-uglify
  