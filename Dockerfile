# Author : Ramit Mitra
# Copyright : [Ramit]Mitra, 2018
# License : MIT
# About : Containerised CI/CD with a dedicated GIT server, user management and jenkins.
FROM node:8.11-alpine
# RUN apk add tar gzip wget sudo git paxctl ttf-dejavu openssl openjdk8-jre --no-cache
RUN apk add sudo git paxctl ttf-dejavu openssl --no-cache
RUN openssl req \
    -new \
    -newkey rsa:4096 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/CN=localhost" \
    -keyout key.pem \
    -out key.cert
WORKDIR /usr/src/stash-master
RUN git clone --single-branch -b vcs https://github.com/ramit-mitra/stash-master.git .
RUN git pull && \
    git gc --aggressive --prune=now && \
    git reflog expire --all --expire=now && \
    git gc --prune=now --aggressive
RUN npm install
CMD npm run launch