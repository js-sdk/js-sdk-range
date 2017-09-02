BABEL=./node_modules/babel-cli/bin/babel.js
MOCHA=./node_modules/mocha/bin/mocha

CFLAGS=--compilers js:babel-register --require should

ifeq ("$(DEV)", "1")
CFLAGS+= -w
endif

index.js: src/index.js
	$(BABEL) $< -o $@

all: index.js test

test:
	$(MOCHA) $(CFLAGS) tests/*.js
