.PHONY: all install

dev:
	./build-docker
	composer update
	composer install
	npm install
	bower install
	gulp build
	./run-docker
