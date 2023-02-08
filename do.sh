#!/bin/sh
kubectl delete -f app.yaml

cd client
podman buildx build . --platform=linux/amd64 --tag docker.io/aviramhassan/node-keepalive:client
podman push docker.io/aviramhassan/node-keepalive:client docker.io/aviramhassan/node-keepalive:client
cd ../server
podman buildx build . --platform=linux/amd64 --tag docker.io/aviramhassan/node-keepalive:server
podman push docker.io/aviramhassan/node-keepalive:server docker.io/aviramhassan/node-keepalive:server

cd ../

kubectl apply -f app.yaml