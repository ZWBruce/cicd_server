# ARG dir=/usr/local/server

FROM node:alpine

RUN mkdir -p /usr/local/server

WORKDIR /usr/local/server

COPY ./package.json ./

RUN npm i

COPY ./ ./

# 改为 pm2
CMD npm run start 

EXPOSE 3000