# Author : Ramit Mitra
# Copyright : [Ramit]Mitra, 2018
# License : MIT
# About : Containerised CI/CD with a dedicated GIT server, user management and jenkins.
FROM node:8.11-alpine
WORKDIR /usr/src/stash-master
COPY . .
RUN npm install
EXPOSE 2323 5055 8080
CMD npm run launch