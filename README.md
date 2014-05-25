#FAST BOILERPLATE

A simple boilerplate to create projects with Jade, Stylus and Gulp.

Maybe you want to read about them:
- [GulpJS](http://gulpjs.com/)
- [Jade](http://jade-lang.com/)
- [Stylus](http://learnboost.github.io/stylus/)

For Grid System uses Wj-Grid, a simple grid addapted from [Jeet](http://jeet.gs/). I did some modifications in core to avoid repetitions and added a modular normalize css, you can read their docs learn how to use, everything is equal.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)


```sh
# Clone this repository
$ git clone git://github.com/willianjusten/Fast.git new_project
$ cd new_project

# install dependencies
$ npm install
```

With the commands above, you have everything to start.

### Folders and Files

```sh
new_project -
	/build -
		/css
			main.css
		/img
		/js
			main.js
		.htaccess
	/src -
		/img
		/js
		/styl
		/templates
		.editorconfig
		gulpfile.js
		package.json
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080)
- `gulp js`: concatenate js files
- `gulp jade`: compile jade files
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp connect`: inicialize a server
- `gulp watch`: call for watch files
- `gulp -p`: minify all files for production

### Demo Files

To see a simple project made with this boilerplate, you can access [here](https://github.com/willianjusten/Fast/tree/tests) or clone the project.

```sh
git clone git://github.com/willianjusten/Fast/tree/tests
```




