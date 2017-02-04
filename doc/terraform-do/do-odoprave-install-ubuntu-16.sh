#!/bin/bash

apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
apt-get update
apt-get install -y docker-engine
docker run --name odoprave -d --restart unless-stopped -p 80:80 odoprave/odoprave
# do monitoring agent
curl -sSL https://agent.digitalocean.com/install.sh | sh
