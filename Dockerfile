FROM nginx:1.11.9
MAINTAINER Eric Stroczynski <ericstroczynski@gmail.com>

# Ensure env is up to date and clean, and install curl
RUN apt-get update \
    && apt-get clean \
    && apt-get install -y curl \
    xz-utils
# Install nodeJS and link npm and nodejs to /usr/local/bin
RUN cd /usr/local \
    && \curl -LO https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz \
    && tar -Jxvf node-v6.9.4-linux-x64.tar.xz \
    && mv ./node-v6.9.4-linux-x64 nodejs \
    && ln -s /usr/local/nodejs/bin/node /usr/bin/node \
    && ln -s /usr/local/nodejs/lib/node_modules/npm/bin/npm-cli.js /usr/bin/npm

ENV NGINX_ROOT /usr/share/nginx/html
# Copy in source code and install deps/build project
COPY . $NGINX_ROOT
RUN cd $NGINX_ROOT \
    && npm install \
    && npm run build
