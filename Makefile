prettier-write:
	npx prettier-eslint --write **/*.js

install:
	yarn install --check-files

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: brain-games install prettier-write
