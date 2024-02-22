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
