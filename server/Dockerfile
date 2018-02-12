FROM node:carbon
WORKDIR /server
RUN npm install -g nodemon
COPY ./package*.json ./
RUN npm install
COPY . ./
EXPOSE 4000
CMD [ "node", "src/server.js" ]
