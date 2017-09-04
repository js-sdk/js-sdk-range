BABEL=./node_modules/babel-cli/bin/babel.js
MOCHA=./node_modules/mocha/bin/mocha

CFLAGS=--plugins transform-es2015-modules-umd
TEST_CFLAGS=--compilers js:babel-register --require should

ifeq ("$(DEV)", "1")
CFLAGS+= -w
endif

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/range.js: src/index.js
	$(BABEL) $< -o $@

dist/range.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/range.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

compile: pre-build dist/range.js dist/range.min.js

all: compile lib/range.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
