#!/bin/bash
git pull

# docker-compose -f dc-test.yaml down
# docker build . -t ftesti
# docker-compose -f dc-test.yaml up -d

docker stop ft
docker rm ft
docker build . -t ftesti
docker run -d --name ft ftesti
