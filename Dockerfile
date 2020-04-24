FROM node:14-alpine
WORKDIR /usr/src/app
RUN apk update
ENV HOST 0.0.0.0
EXPOSE 3000
