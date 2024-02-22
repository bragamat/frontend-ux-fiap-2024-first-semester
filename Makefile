.DEFAULT_GOAL := dev

build:
	@yarn build
.PHONY: build

deps:
	@yarn
.PHONY: deps

dev: deps
	@yarn dev
.PHONY: dev

lint:
	@yarn lint
.PHONY: lint

lint.fix:
	@yarn lint -- --fix
.PHONY: lint.fix
