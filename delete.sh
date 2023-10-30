#!/bin/bash

# Stop all running containers
docker stop $(docker ps -a -q)

# Remove all stopped containers
docker rm $(docker ps -a -q)

# Remove volume noteTask
# docker volume remove noteTask

# Remove all volumes
# docker volume rm $(docker volume ls -q)

# Remove all images
docker rmi -f $(docker images -a -q)