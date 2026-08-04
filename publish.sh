#!/bin/bash

set -euo pipefail

update_vocabularies() {
	local vocab_dir="public/vocabularies"
	mkdir -p "$vocab_dir"

	echo "Updating vocabularies in $vocab_dir"

	curl -fL -sS -H "Accept: application/rdf+xml" \
		"https://w3id.org/mobilitydcat-ap/mobility-theme" \
		-o "$vocab_dir/mobility-theme.rdf"

	curl -fL -sS -H "Accept: application/rdf+xml" \
		"https://w3id.org/mobilitydcat-ap/mobility-data-standard" \
		-o "$vocab_dir/mobility-data-standard.rdf"

	curl -fL -sS \
		"https://op.europa.eu/o/opportal-service/euvoc-download-handler?cellarURI=http%3A%2F%2Fpublications.europa.eu%2Fresource%2Fdistribution%2Ffrequency%2F20260318-0%2Frdf%2Fskos_core%2Ffrequencies-skos.rdf&fileName=frequencies-skos.rdf" \
		-o "$vocab_dir/accrual-periodicity.rdf"

	curl -fL -sS \
		"https://op.europa.eu/o/opportal-service/euvoc-download-handler?cellarURI=http%3A%2F%2Fpublications.europa.eu%2Fresource%2Fdistribution%2Ffile-type%2F20260318-0%2Frdf%2Fskos_core%2Ffiletypes-skos.rdf&fileName=filetypes-skos.rdf" \
		-o "$vocab_dir/file-types.rdf"

	echo "Vocabulary files updated:"
	ls -lh "$vocab_dir"
}

publish_dist() {
	rm -rf dist
	docker build -f Dockerfile --no-cache -t cefriel/mobilitydcatap-ui .
	CONTAINER_ID=$(docker run -d cefriel/mobilitydcatap-ui)
	docker cp "$CONTAINER_ID":/usr/share/nginx/html/mobilitydcatap-ui/. ./dist/
	docker stop "$CONTAINER_ID"
}

case "${1:-publish}" in
	update-vocab)
		update_vocabularies
		;;
	publish)
		publish_dist
		;;
	publish-with-vocab)
		update_vocabularies
		publish_dist
		;;
	*)
		echo "Usage: $0 [publish|update-vocab|publish-with-vocab]"
		exit 1
		;;
esac
