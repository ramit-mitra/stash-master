FROM node:8.11-alpine

WORKDIR /usr/src/stash-master
COPY . . 

RUN npm install && \
    npm install -g nodemon localtunnel

# CMD nodemon index.js --https
CMD node index.js