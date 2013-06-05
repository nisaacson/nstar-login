MOCHA=node_modules/.bin/mocha
REPORTER?=tap
FLAGS=--reporter $(REPORTER)

unit:
	$(MOCHA) $(shell find test/* -prune -name "*.test") $(FLAGS)
