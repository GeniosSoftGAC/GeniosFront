setup:
	npm install -g browser-sync && \
	npm install -g http-server

dev:
	browser-sync start --server --files="**/*"
