Dare Greatly Phase 2 - Canada / Multisite
=========================================

INSTRUCTIONS:
--------------

1) The provided sql (latest.sql) will work when developing with Docker Machine IP: 192.168.99.100
You will have to change 192.168.99.100 in the Database to your URL in order for the site to work anywhere else.
To clarify any instances of 192.168.99.100 will need to be changed to dare-greatly.ca (for example)

This sql is the same that is located within osx-docker-mysql > dump.sql. Dump.sql is used with docker.

Tables:
	`wp_blogs`
	`wp_options`
	`wp_2_options`
	`wp_site`

2) This is a dummy user you can login with Wordpress Admin:
cadillac
cadillacuser575757575	

3) DARE-GREATLY CA ENV

nginx version: nginx/1.4.6 (Ubuntu)
PHP 5.5.9
WordPress 4.3.6
mysql  Ver 14.14 Distrib 5.5.53, for debian-linux-gnu

-----------

This is the repo for dare-greatly.ca, a multisite, multilingual version of daregreatly.com. Because Wordpress doesn't support moving the wp-includes and wp-admin folders in a multisite / nginx build, this installation uses vanilla wordpress folder structure.

To mimic the server environment as closely as possible, this installation uses Docker to create an nginx environment and a mysql server. Both servers use Docker folder mapping to keep data and application outside of the docker build.

To install: 
-----------

* Install bower, npm, gulp, Composer, and Docker. 
* open a terminal where docker is available (use Docker Quickstart Terminal on OS X).
* go to the project root folder, and enter the command `make dev`
* rename wordpress/local-config.rename.php wordpress/local-config.php (this file will be ignored on git, but has your local configuration)
*local config should work with the default user name and password of the docker mysql instance.
* Site will be available at 192.168.99.100, the default docker machine location for OS X.

To develop:
-----------

While on your local machine you should use local-config.php to use local config.

You will need to edit wp-config.php to work on your server of choice.

`./run-docker` from one terminal and `gulp` from another. Gulp will constantly compile css and js. Run docker is a non-daemonized nginx server and will continue running in the terminal session so the log is visible. 

`run-docker` is a very simple set of shell commands that creates containers from an `nginx-local` image and a `mysql-local` image. The running `myql-local` container is named so that the `nginx-local` container can get a reference. If you ever need to kill and restart mysql, use the following:

`docker kill mysql-local`
`docker rm mysql-local`

If for some reason, this doesn't work, use `docker ps` to see all running images.

`build-docker` will rebuild both the nginx and mysql instances, using cache after the first run.

To rebuild the database from the provided `dump.sql` file:

* delete the contents of `db/`
* kill and remove your `mysql-local` image
* `./build-docker`
* `./run-docker`

Site will be available at 192.168.99.100, the default docker machine location for OS X.

Under Documentation is additional documentation on the modules as well as some hints on working with Docker and WP multisite. 

What's what
-----------

* `nginx-php-fpm` - runs the nginx server. `./wordpress/` is mapped to an internal directory which is the basis for the server. `conf/nginx-site.conf` should be in close sync with dev nginx config.
* `osx-docker-mysql` - runs the mysql server. `./db/` is mapped to an internal directory.
* `packages` contains any composer wordpress plugin packages which can't be accessed by repo. (composer is only used for wordpress plugins in this build)
* `wordpress` is the top level of the wordpress install and the server root.
* `wordpress/wp-content/themes/reverie-master` is the theme used by the project, and where most development of the site will take place.
* `vendor` is the root install folder for composer. It's not used directly by the project, and only plays a role in installing plugins.
* `dist` will be used for deployment to production.


### Table of Contents

- [US Readme](documentation/us-docs/README.md)
- [Credentials](documentation/credentials.md)
- [Docker](documentation/docker.md)

