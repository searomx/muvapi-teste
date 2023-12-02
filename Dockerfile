# Check out https://hub.docker.com/_/node to select a new base image
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . /usr/src/app/ 

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
