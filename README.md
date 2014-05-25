#FAST BOILERPLATE

A simple boilerplate to create project with Jade, Stylus and Gulp.

This boilerplate uses Jade and Stylus, maybe you want to read about them:

- [Jade](http://jade-lang.com/)
- [Stylus](http://learnboost.github.io/stylus/)

And for Grid System, I'm using my Wj-grid, adapted from Jeet, You can learn how to use it in your [site](http://jeet.gs/), the changes were made just in the core.

## Getting Started

It's simple and you'll need just 2 steps to get started.

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





