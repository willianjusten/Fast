![Fast](src/img/fast-logo.png)

---

A simple boilerplate to create projects with Jade, Stylus, Gulp, Browserify and Karma.

Maybe you want to read about them:
- [GulpJS](http://gulpjs.com/)
- [Jade](http://jade-lang.com/)
- [Stylus](http://learnboost.github.io/stylus/)
- [Browserify](http://browserify.org/)
- [Karma](http://karma-runner.github.io/)

For grid system I use [Jeet](http://jeet.gs/) with some help from [Kouto Swiss](http://kouto-swiss.io/) for animations, reset and a lot of great mixins. And for responsive utilities, [Rupture](https://github.com/jenius/rupture) is awesome =)


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
	/tests -
		/unit
```

### Examples

If you want to see how this works, see this [branch](https://github.com/willianjusten/Fast/tree/tests).

Or clone the repository and change to the branch `tests`

```sh
# Clone this repository
$ git clone git://github.com/willianjusten/Fast.git new_project
$ cd new_project

# change the branch
$ git checkout tests

# install dependengcies
$ npm install
```


### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080)
- `gulp --fy`: Initialize watch for changes and a server(localhost:8080) using browserify mode
- `gulp js`: execute js files
- `gulp browserify`: execute js files in browserify mode
- `gulp jade`: compile jade files
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp browser-sync`: inicialize a server
- `gulp watch`: call for watch files
- `gulp deploy`: deploy files via rsync (view configuration below)
- `gulp --p`: minify all files for production
- `gulp --fy --p`: minify all files for production (browserify mode)
- `gulp build --p`: minify files and deploy via rsync
- `gulp build --fy --p`: minify files and deploy via rsync (browserify mode)
- `karma start`: launch a phantomjs and watch for tests

### Rsync Configuration

In order to use rsync, you have to set up your ssh key in your host. After this, change [this line](https://github.com/willianjusten/Fast/blob/master/gulpfile.js#L100) in Gulpfile, using your username, hostname and destination folder.

### License

This boilerplate is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.
