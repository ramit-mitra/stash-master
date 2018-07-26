FROM node:8.11-alpine

WORKDIR /usr/src/stash-master
COPY . . 

RUN npm install

CMD node index.js --https