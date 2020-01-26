FROM node:13.7.0

MAINTAINER Aditya Mahaddalkar <adityam1311@gmail.com>

RUN apt-get update

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "test"]

CMD ["node", "index.js"]
