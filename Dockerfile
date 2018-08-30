FROM node:8.11.4-alpine
LABEL maintainer="Lee Myring <mail@thinkstack.io>" version="1.0"

EXPOSE 3000

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN apk add --no-cache --virtual .build-deps alpine-sdk python \
 && npm install --production --silent \
 && apk del .build-deps

COPY . .

CMD npm start