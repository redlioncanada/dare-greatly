Docker
======

This build includes docker support because it's the simplest way to ensure a consistent build locally, and avoid polluting the local environment with server daemons, mysql, etc.

However, docker comes with a series of challenges, especially on OS X or Windows, where it's running on a virtual box. Included below is a rationale of how we're using it, why we're using it, how to install it, and how to recover from common errors.

Basic concepts
--------------

Docker works by using the core features of linux, but creating an insulated, custom "container" that essentially acts as its own system. It's not as resource hungry as a virtual machine, and can operate directly "on the metal". Unfortunately, on Mac OS X, this key strength is lost, because it has to run on a virtual linux machine. For the purpose of this project, there's three levels of abstraction:

* Docker-machine: a virtual machine running on OSX to host *containers*. This machine acts as a virtual server living at 192.168.99.100.
* Image: a read-only template that is built from an install script called a *Dockerfile*. This is what's "rehydrated" to create a *container*.
* Container: what actually gets "run" on the docker-machine. This is an instance of an *image*.

You can get a more in-depth understanding of the architecture [here](https://docs.docker.com/engine/understanding-docker/).

Getting started (on OS X)
-------------------------

The first step to running Docker on Mac is to install the Docker Toolbox, a virtual machine which will have its own IP address (192.168.99.100). When you build a docker image or run a container on Mac, it's actually running on this virtual image.

The basic steps to installation can be found [here](https://docs.docker.com/engine/installation/mac/). The download is [here](https://www.docker.com/products/docker-toolbox).

To start using docker, run the app "Docker Quickstart Terminal". This will give you a new terminal window that's been specially set up to run docker.

How we're using Docker
----------------------

This project uses two docker images (and containers): `nginx-local` and `mysql-local`. When the nginx container is run, the local `wordpress` folder is mapped to the site root (`/var/www/html`) of the container. When the mysql container is run, the local `db` folder is mapped to the `/var/lib/mysql` folder within the container.

The build script `build-docker` creates and names the two images.

The run script, `run-docker` attempts to create and run new containers for the two images. If a container already exists which is named `mysql-local`, then it just attempts to start the container again. (this may throw a warning when restarting the project, if mysql-local is already running. This can be ignored.)

Once running, nginx (and therefore, the site) is available at 192.168.99.100 on port 80. mysql is available at 192.168.99.100 on port 3306.

*** MYSQL:

The dockerfile for this image is in the osx-docker-mysql folder, and it's largely based on a public dockerfile of that name, found [here](https://github.com/dgraziotin/osx-docker-mysql). The key difference is that ours is set up to import a seed database of wordpress on initial build.

When it's initially run, the mysql container looks for a db. If it can't find one, it imports the contents of `osx-docker-mysql/dump.sql` that was copied into the image during its first build. Therefore: *if you ever need to replace the database, wipe out the contents of the `db` folder and rebuild the mysql image*

*** NGINX:

This dockerfile is also based on a public image, found [here](https://hub.docker.com/r/richarvey/nginx-php-fpm/). The file `nginx-php-fpm/conf/nginx.conf` has been given the directives necessary for multisite wordpress. Other than that, it's fairly unaltered from the original image.


Running this project without docker
-----------------------------------

The added complexity of multisite wordpress means that a dev server like php -S won't work; it can't correctly process all the directives needed to correctly route different blogs and their admin pages. Even if it did, it's best to stick as close as possible to the production server environment.

If desired, this project can be run without docker (although this hasn't been tested). To do so, the following steps would have to be followed:

1. Have a running nginx server pointing to the wordpress folder and using the nginx.conf directives found in `nginx-php-fpm/conf/nginx-site.conf` (but referring to the appropriate local folder)
2. Change all references to `192.168.99.100` in the file `osx-docker-mysql/dump.sql` to 'localhost' or whatever IP your nginx server is listening on. Bear in mind that wordpress multisite is sensitive to the correct domain being provided in the database. Therefore, while both 'localhost' and '127.0.0.1' might be valid for your server instance, wordpress will only work properly with the domain listed in the database.
3. Create a local database, and import the dump.sql.
4. In local-config.php, change the domain to the same as above. Change the mysql port, database, host, and credentials as needed.

Running docker, even with the headache of the docker-machine on OS X, is more straightforward and independent of your local configuration. It also won't interfere with other running projects.	


Common errors
-------------

Here's a few quick common errors:

`docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.`

Make sure to start your terminal from "Docker Quickstart Terminal", in your Applications folder.

`docker: Error response from daemon: Conflict. The name "/mysql-local" is already in use by container ...`

This just means that you have a running instance of the mysql-local image. The run-docker script is designed to bypass this if it's found. If you need to stop the mysql process, the commands `docker kill mysql-local` followed by `docker rm mysql-local` will do the trick. Then `run-docker` again and a new container will be created from the image.


Troubleshooting Tips
--------------------

To see what containers are running, use:

`docker ps`

while the app is active, you should see two running containers. One should be based on the IMAGE mysql-local and have the CONTAINER name mysql-local. The other should be based on the IMAGE nginx-local and have a random CONTAINER name. We only explicitly name mysql-local, because the nginx container needs a reference to it.

The mysql instance is explicitly named in our run script so that nginx can refer to it. So the container mysql-local is running the IMAGE mysql-local. These names could just as well be different.

`docker ps -a` this will also show stopped containers.

`docker stop <hash>`

This will stop a running container, where hash is the container id (or container name). However, it doesn't remove it from storage, and it can be restarted. Another container can't be created using the same name. `docker kill <hash>` does the same thing but doesn't try to gracefully stop any processes.

`docker rm <hash>`

This can only be done once the container is stopped (per the above).

`docker images`

This lists all images.

`docker rmi <hash>`

This removes an image. If an image is removed, it has to be rebuilt (using `./build-docker`). This should only need to happen if a change is made to one of the images, or you want to start with the default database in the repo again.

`docker stop $(docker ps -a -q)`
`docker rm $(docker ps -a -q)`

This combination will stop and remove all containers.

Helpful links
-------------
[Understanding the Architecture](https://docs.docker.com/engine/understanding-docker/)
[installation](https://docs.docker.com/engine/installation/mac/)
[Why you should stop installing your webdev environment locally](https://www.smashingmagazine.com/2016/04/stop-installing-your-webdev-environment-locally-with-docker/)



