#! /bin/bash

docker image prune -f 

docker stop cicdServer
docker rm cicdServer
docker rmi cicd-server

docker build -t cicd-server .

docker run -p 3001:3000 --name cicdServer -d cicd-server
