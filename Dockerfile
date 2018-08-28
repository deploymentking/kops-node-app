FROM node:8.11.4-alpine
LABEL maintainer="Lee Myring <mail@thinkstack.io>" version="1.0"

EXPOSE 3000

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm install

COPY . .

CMD npm start