build:
	cd reign-api && $(MAKE) build
	cd reign-spa && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down