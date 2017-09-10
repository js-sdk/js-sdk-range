include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/range.js: src/index.js
	$(BABEL) $< -o $@

dist/range.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/range.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/range.js dist/range.min.js lib/range.js

all: test dist-all lib/range.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
