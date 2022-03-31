# ARG dir=/usr/local/server

FROM node:alpine

RUN mkdir -p /usr/local/server

WORKDIR /usr/local/server

COPY ./package.json ./

RUN npm i 

COPY ./ ./

CMD npm run start