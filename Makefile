.DEFAULT_GOAL := dev

build:
	@npm run build
.PHONY: build

deps:
	@npm i
.PHONY: deps

dev: deps
	@npm run dev
.PHONY: dev

lint:
	@npm run lint
.PHONY: lint

lint.fix:
	@npm run lint -- --fix
.PHONY: lint.fix
