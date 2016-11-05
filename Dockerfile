FROM nginx
MAINTAINER Jordan Schalm <jordan.schalm@gmail.com>

RUN apt-get update && apt-get install -y nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

ENV NGINX_ROOT /usr/share/nginx/html

COPY . $NGINX_ROOT
RUN cd $NGINX_ROOT && npm install
RUN cd $NGINX_ROOT && npm run build
