#!/bin/bash

docker build -f Dockerfile-build --no-cache -t cefriel/mobilitydcatap-ui .

CONTAINER_ID=$(docker run -d cefriel/mobilitydcatap-ui)
docker cp $CONTAINER_ID:/usr/share/nginx/html/mobilitydcatap-ui/. ./dist/

docker stop $CONTAINER_ID
