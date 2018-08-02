# Author : Ramit Mitra
# Copyright : [Ramit]Mitra, 2018
# License : MIT
# About : Containerised CI/CD with a dedicated GIT server, user management and jenkins.
FROM node:8.11-alpine
RUN apk add tar gzip wget sudo git paxctl --no-cache && \
    mkdir -p /opt/java && \
    cd /opt/java && \
    wget http://download.oracle.com/otn-pub/java/jdk/10.0.2+13/19aef61b38124481863b1413dce1855f/jre-10.0.2_linux-x64_bin.tar.gz && \
    sudo tar -zxvf jre-10.0.2_linux-x64_bin.tar.gz && \
    ls -la && \
    ln -s /opt/java/jdk1.8.0_121 /opt/java/current && \
    touch /etc/profile.d/java.sh && \
    export JAVA_HOME=/opt/java/current && \
    export PATH=$PATH:$JAVA_HOME/bin && \
    /etc/profile.d/java.sh && \
    ls -la
WORKDIR /usr/src/stash-master
COPY . .
RUN npm install
# EXPOSE 2323 5055 8080
CMD npm run launch